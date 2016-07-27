//TODO: Implement event module
var app = app || {};

var event = (function (scope) {
    if (this.constructor === event) {
        throw new Error("Can't instantiate abstract class!");
    }
    function Event(param){
        this.setTitle( param.title);
       this.setType(param.type);
        this.setDuration(param.duration)
        this._date = options.date;
    }
    Event.prototype.setTitle = function(title){
        var regex = /\S/g;
        if(regex.match(title)){
            this._title = title;
        }
        throw new Error('Title cannot be null ot empty ! ');
    };
    Event.prototype.getTitle = function(){
        return this._title;
    };
    Event.prototype.setType = function(type){
        var regex = /\S/g;
        if(regex.match(type)){
            this._type = type;
        }
        throw new Error('Title cannot be null ot empty ! ');
    };
    Event.prototype.getType = function(){
        return this._type;
    };
    Event.prototype.setDuration = function(duration){
        if(isNumber(duration)){
            this._duration = duration;
        }
        throw new Error('Invalid type !')
    };
    Event.prototype.getDuration = function(){
        return this._duration;
    };
    Event.prototype.setDate = function(date){
        if(date instanceof Date){
            this._date = date;
        }
        throw new Error("Invalid date !!!")
    };
    Event.prototype.getDate = function(){
        return this._date;
    };

}(app));