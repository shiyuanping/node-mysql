const {app, pool, Result} = require('./connect');
const login =  require('./login/index');

app.all('*', (req, res, next) => {
    next();
})

app.all('/', (req, res) => {
    pool.getConnection((err, conn) => {
        res.json({a: 'b'})
        conn.release();
    })
})

app.use('/login', login);

app.listen(3000, () => console.log('服务启动'));

// 连接池代码

// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const bodyParser = require('body-parser'); // 解析参数

// const app = express();

// const router = express.Router();

// const options = {
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     port: '3306',
//     database: 'myblog',
// }

// let pool;
// repool();



// app.use(cors()); // 解决跨域
// app.use(bodyParser.json()); // json请求
// app.use(bodyParser.urlencoded({extended: false})); // 表单请求


// app.listen(3000, () => console.log('服务启动'));


// app.get('/login', (req, res) => {
//     console.log('我是登录');
//     // pool.query('select * from students', (e, r) => res.json(new Result({data: r})));
//     pool.getConnection((err, conn) => {
//         conn.query('select * from students', (e, r) => res.json(new Result({data:r})));
//         conn.release();
//     })
// })

// function Result({code=1, msg='', data={}}) {
//     this.code = code;
//     this.msg = msg;
//     this.data = data;
// }

// function repool() {
//     console.log('我重连了！');
//     pool = mysql.createPool({
//         ...options,
//         waitForConnections: true,
//         connectionLimit: 100,
//         queueLimit: 0
//     });
//     pool.on('error', err => {
//         console.log(err);
//         err.code === 'PROTOCOL_CONNECTION_LOST' && setTimeout(repool, 2000)
//     });
// }
// 普通连接有点问题

// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const bodyParser = require('body-parser'); // 解析参数

// const app = express();

// const router = express.Router();


// let connection;
// reconnect();



// app.use(cors()); // 解决跨域
// app.use(bodyParser.json()); // json请求
// app.use(bodyParser.urlencoded({extended: false})); // 表单请求


// app.listen(3000, () => console.log('服务启动'));


// app.all('/login', (req, res) => {
//     console.log('我是登录');
//     console.log()
//     connection.connect();
//     connection.query('select * from students', (err, r) => {
//         console.log(r);
//         res.json(new Result({data: r}))
//     });
//     connection.end();
// })

// function Result({code=1, msg='', data={}}) {
//     this.code = code;
//     this.msg = msg;
//     this.data = data;
// }

// function reconnect() {
//     console.log('我重连了！');
//     connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '123456',
//         port: '3306',
//         database: 'myblog',
//     });
//     connection.on('error', err => {
//         console.log(err);
//         err.code === 'PROTOCOL_CONNECTION_LOST' && setTimeout(reconnect, 2000)
//     });
// }

// app.get('/', (req, res)=> {
//     res.json('helloWord')
// })

// app.get('/', (req, res)=> {
//     res.send('<div style="color: pink">hello world223</div>')
// })

// let login = true;
// app.all('*', (req, res, next) => {
//     if(!login) return res.json('未登录！');
//     next();
// })

// app.post('/login', (req, res) => {
//     res.json('helloword')
// })
// app.post('/test/:data', (req, res) => {
//     return res.json({
//         query: req.query,
//         data: req.params,
//         json: req.body
//     })
// })
