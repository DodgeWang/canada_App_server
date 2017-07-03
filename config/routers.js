
var user = require('../app/controllers/user.controller');
var student = require('../app/controllers/student.controller');

module.exports = function(app) {
	app.post('/api/login',user.login); //登录
	app.post('/api/resetPassword',user.resetPassword); //修改用户密码
    app.get('/api/studentInfo',student.getInfo); //获取学生基本信息
    app.get('/api/studentMark',student.getMarkList); //获取学生考试成绩
    app.get('/api/lessonList',student.lessonList); //获取学生课程列表
    app.get('/api/lessonInfo',student.lessonInfo); //获取学生课程详情
}