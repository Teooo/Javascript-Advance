//TODO: Implement lecture module
var app = app || {};

var Lecture = (function (scope) {
    function Lecture(param){
        Event.call(this,param);
        this._trainer = param.trainer;
        this._course = param.course;
    }
    Lecture.extends(event);
    scope._lecture = Lecture;
    scope.lecture = function(param){
        return new Lecture(param);
    }
}(app));