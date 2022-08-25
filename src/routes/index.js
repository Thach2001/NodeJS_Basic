const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);

    // app.get('/', (req, res) => {
    //     res.render('home');
    //   });

    // //   app.get('/news', (req, res) => {
    // //     res.render('news');
    // //   });

    // app.get('/search', (req, res) => {
    //     //console.log(req.query.q) //lấy value truyền qua URL { q: 'f8 lap trinh', ref: 'mycv', author: 'thach' }
    //     res.render('search');
    // });

    //Khắc phục lỗi 404
    //   app.post('/search', (req, res) => {
    //     console.log(req.body); //lấy dữ liệu từ form data
    //     res.send('');
    //   });
}

module.exports = route;
