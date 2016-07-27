//TODO: Implement trainer module
var app = app || {};
var Trainer = (function (scope) {
    function Trainer(name,workOfHours){
        Employee.call(this,name,workOfHours);
        this.course = [];
        this.feedbacks = [];
    }

    Trainer.extends(scope._employee);

    Trainer.prototype.addFeedback = function(feedbacks){
        var regex = /\S/g;
        if(regex.match(feedbacks)){
            this.feedbacks.push(feedbacks);
        }
    };
    Trainer.prototype.addCourse = function(newCourse){
        if(course instanceof app.course){
            this.course.push(newCourse);
        }
    };

    scope.trainer = function(name,worksOfHours){
        return new Trainer(name, worksOfHours)
    };

}(app));