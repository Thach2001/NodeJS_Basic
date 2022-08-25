const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongose');

class SiteController {
    //[GET] / 
    //Cách 1:
    // index(req, res) {

    //     Course.find({}, function (err, courses) {
    //         if (!err) {
    //             res.json(courses)
    //         } else {
    //             res.status(400).json({ error: 'ERROR!!!'});
    //         }
    //     })
    //     // res.render('home');
    // }

    //Cách 2:
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                //courses = courses.map(course => course.toObject()) //Giải quyết vấn đề bảo mật "handlebars": {"version": "4.7.7", phiên bản ko còn hỗ trợ
                res.render('home', {
                    courses: mutipleMongooseToObject(courses) //courses: courses //Lấy dữ liệu từ các khóa học
                });
            }) 
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
