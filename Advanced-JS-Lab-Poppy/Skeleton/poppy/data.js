// TODO: Implement popup function constructors
Object.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

//Base poppy
var Poppy = (function(){
    function Poppy(type, title, message){
        this.type = type;
        this.title = title;
        this.message = message;

    }
    return Poppy
})();

//Success
var success = (function(){
    function Success(title, message){
        Poppy.call(this, 'success', title, message);
        return {
            popupData: {
                position: 'bottomLeft',
                type: this.type,
                title: this.title,
                message: this.message
            }
        }
    }

    Success.extends(Poppy);

    return{
        pop:Success

    }

})();

//Info
var info = (function(){
    function Info(title, message){
        Poppy.call(this, 'info', title, message);
        return {
            popupData: {
            position:'topLeft',
                type:this.type,
                title : this.title,
                message:this.message,
                closeButton:true
            }
        };
    }
    Info.extends(Poppy);


    return {
        pop:Info

    }
})();

//Error
var error;
error = (function () {
    function Error(title, message) {
        Poppy.call(this, 'error', title, message)
        return {
            popupData: {
                position: 'topRight',
                type: this.type,
                title: this.title,
                message: this.message,

            }
        };
    }

    Error.extends(Poppy);

    return {
        pop: Error



    }
})();

//Warning
var warning = (function(){
    function Warning(title, message){
        Poppy.call(this, 'warning', title, message);
        return {
            popupData: {
                position: 'bottomRight',
                type: this.type,
                title: this.title,
                message: this.message
            }
        }
    }
    Warning.extends(Poppy);

    return {
        pop:Warning


    }
})();

