//TODO: Implement course module
var app = app || {};

var Course = (function (scope) {
    function Course(name, numberOfLectures){
        this.setName(name)
        this.setNumberLectures(numberOfLectures);
    }
    Course.prototype.setName = function(name){
        var regex =/\S/g;
        if(regex.match(name)){
            return this._name = name;
        }
        throw  Error("Curse name cannot be empty !")
    };
    Course.prototype.getName = function(){
        return this._name;
    };
    Course.prototype.getLectures = function(){
        return this._numberOfLectures
    };
    Course.prototype.setNumberLectures = function(numberLectures){
        if(isNumber(numberLectures)){
            this._numberOfLectures = numberLectures;
        }
        throw Error("Invalid type !")
    };
    scope.course = function(name, numberOfLectures){
        new Course(name, numberOfLectures);
    }
}(app));


