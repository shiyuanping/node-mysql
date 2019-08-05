const {pool, router, Result} = require('../connect');

router.get('/', (req, res) => {
    pool.getConnection((err, conn) => {
        conn.query('select * from students', (e, r) => res.json(new Result({data:r})));
        conn.release();
    })
})

module.exports = router;
