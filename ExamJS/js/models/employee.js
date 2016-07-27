//TODO: Implement employee module

var app = app || {};

var Employee = (function (scope) {
    function Employee(name, workHours){
        this.setName(name);
        this.setWorkHours(workHours);
    }
    Employee.prototype.getName = function(){
        return this._name;
    };
    Employee.prototype.setName = function(name){
        var regex =/\S/g;
        if(regex.match(name)){
            return this._name =name;
        }
    };
    Employee.prototype.getWorkHours = function(){
        return this._workHours
    };
    Employee.prototype.setWorkHours = function(workHours){
        if(isNumber(workHours)){
            return this._workHours = workHours;
        }
    };
    scope._employee = Employee;
    scope.employee = function(name,workHours){
        return new Employee(name, workHours);
    }
}(app));