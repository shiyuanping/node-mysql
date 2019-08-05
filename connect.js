const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser'); // 解析参数

const app = express();

const router = express.Router();

const options = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'myblog',
}
app.use(cors()); // 解决跨域
app.use(bodyParser.json()); // json请求
app.use(bodyParser.urlencoded({extended: false})); // 表单请求

let pool;
repool();

function Result({code=1, msg='', data={}}) {
    this.code = code;
    this.msg = msg;
    this.data = data;
}

function repool() {
    console.log('我重连了！');
    pool = mysql.createPool({
        ...options,
        waitForConnections: true,
        connectionLimit: 100,
        queueLimit: 0
    });
    pool.on('error', err => {
        console.log(err);
        err.code === 'PROTOCOL_CONNECTION_LOST' && setTimeout(repool, 2000)
    });
}

module.exports = {pool, Result, router, app};