const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3001;

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

//Hiện img: http://localhost:3000/img/logo.png
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
); //middleware: sử lý form
app.use(express.json()); //sử lý javascipt

// HTTP Logger
app.use(morgan('combined'));

// Template Engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); //=='resource/views' trong chrome

//Khởi tạo Route
route(app);

// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.get('/news', (req, res) => {
//   res.render('news');
// });

// app.get('/search', (req, res) => {
//   //console.log(req.query.q) //lấy value truyền qua URL { q: 'f8 lap trinh', ref: 'mycv', author: 'thach' }
//   res.render('search');
// });

// //Khắc phục lỗi 404
// app.post('/search', (req, res) => {
//   console.log(req.body); //lấy dữ liệu từ form data
//   res.send('');
// });

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
