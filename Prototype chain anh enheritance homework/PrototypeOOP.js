Object.prototype.extend = function(properties) {
    function f() {};
    f.prototype = Object.create(this);
    for (var prop in properties) {
        f.prototype[prop] = properties[prop];
    }
    f.prototype._super = this;
    return new f();
}



var Point = {
    init:function(x,y){
        this.x = x;
        this.y = y;
        return this;
    },
    toString:function(){
        console.log('('+this.x+', '+this.y+')');
    }
};
var pointOne = Object.create(Point).init(1,1);
var pointTwo = Object.create(Point).init(3,5);

var Shape = {
    init:function(){
        return this;
    },
    toString:function(){
        console.log('I"m a shape');

    }
};

var Circle = Shape.extend({
    init:function(point, radius, color){
    if(typeof radius !== 'number'){
        throw new Error('Radius should be a number.')
    }
    if(!color.match('#[0-9a-zA-Z]+')){
        throw new Error('Color should be in hex format.')
    }
    //Shape.call(this);
    this.Point = point;
    this.Radius = radius;
    this.Color = color;
    return this;
    },
    toString:function(){
        console.log('I"m a circle:('+this.Point.x+', '+this.Point.y+') Radius:'+this.Radius+', Color:'+this.Color);
    }


});

var Rectangle = Shape.extend({
    init:function Rectangle(point, width, height, color){
        if(typeof width !== 'number'){
            throw new Error('Width should be a number.')
        }
        if(typeof height !== 'number'){
            throw new Error('Height should be a number.')
        }
        if(!color.match('#[0-9a-zA-Z]+')){
            throw new Error('Color should be in hex format.')
        }
        this.Point = point;
        this.Width = width;
        this.Height = height;
        this.Color = color;
        return this;
    },
    toString: function () {
        console.log('I"m a rectangle:(' + this.Point.x + ', ' + this.Point.y + ') Width:' + this.Width + ',Height:' + this.Height + ' Color:' + this.Color)
    }
});

var Line = Shape.extend({
    init:function Line(startPoint, endPoint, color){
        if(!color.match('#[0-9a-zA-Z]+')){
            throw new Error('Color should be in hex format.')
        }
        this.StartPoint = startPoint;
        this.EndPoint = endPoint;
        this.Color = color;
        return this;
    },
    toString:function() {
        console.log('I"m a line starts from: (' + this.StartPoint.x + ', ' + this.StartPoint.y + ')' +'' +
            'ends at: (' + this.EndPoint.x + ', ' + +this.EndPoint.y + ') with ' + this.Color + ' color');
    }
});

var Segment = Line.extend({
   init:function(startPoint, endPoint, color){
       this._super.init.call(this, startPoint, endPoint, color);
       return this;
   },
    toString:function(){
        console.log('I"m a Segment starts from: (' + this.StartPoint.x + ', ' + this.StartPoint.y + ') '+'' +
            'ends at: (' + this.EndPoint.x + ', ' + +this.EndPoint.y + ' with) ' + this.Color + ' color');
    }
});


var shape = Object.create(Shape).toString();
var circle = Object.create(Circle).init(pointOne, 6, '#123456').toString();
var rect = Object.create(Rectangle).init(pointTwo, 12, 54, '#123456').toString();
var line = Object.create(Line).init(pointOne, pointTwo, '#123456').toString();
var segment = Object.create(Segment).init(pointOne, pointTwo, '#asd123').toString();