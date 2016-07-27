//TODO: Implement hall module
var app = app || {};

var Hall = (function (scope) {
    function Hall(name, capacity){
        this.setName(name);
        this.setCapacity(capacity);
        this.parties = [];
        this.lectures = [];
    }
    Hall.prototype.setName = function(name){
        if (name === undefined || name === "") {
            throw new Error("Name cannot be empty or undefined.");
        }
        return this._name = name;
    };
    Hall.prototype.getName = function(){
        return this._name;
    };
    Hall.prototype.setCapacity = function(capacity){
        if(!isNumber(capacity)){
            throw new Error("Invalid type !")
        }
        this._capacity = capacity;
    };
    Hall.prototype.getCapacity = function(){
        return this._capacity;
    };
    Hall.prototype.addEvent = function(event){
        if(event instanceof scope._party){
            this.parties.push(event);
        }
        if(event instanceof scope._lecture){
            this.lectures.push(event);
        }
   };

}(app));