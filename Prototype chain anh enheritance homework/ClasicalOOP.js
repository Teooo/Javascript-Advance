//Extends function
Object.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}


var Point = (function(){
    function Point(x,y){
        this.X = x;
        this.Y = y;
        return this;
    }
    Point.prototype.toString = function(){
        console.log('('+this.X+', '+this.Y+')');
    };
    return Point;
})();

var Shape = (function(){
    function Shape(){
        return this;
    }
    Shape.prototype.toString = function(){
        console.log('I"m a shape.');
    };
    return Shape;

})();

var Circle = (function(){
        function Circle(point, radius, color){
            if(typeof radius !== 'number'){
                throw new Error('Radius should be a number.')
            }
            if(!color.match('#[0-9]+')){
                throw new Error('Color should be in hex format.')
            }
            //Shape.call(this);
            this.Point = point;
            this.Radius = radius;
            this.Color = color;
            return this;
        }
        Circle.extends(Shape);
        Circle.prototype.toString = function(){
            console.log('I"m a circle:('+this.Point.X+', '+this.Point.Y+') Radius:'+this.Radius+', Color:'+this.Color);
        };

        return Circle;
    }
)();

var Rectangle = (function(){
    function Rectangle(point, width, height, color){
        if(typeof width !== 'number'){
            throw new Error('Width should be a number.')
        }
        if(typeof height !== 'number'){
            throw new Error('Height should be a number.')
        }
        if(!color.match('#[0-9]+')){
            throw new Error('Color should be in hex format.')
        }
        this.Point = point;
        this.Width = width;
        this.Height = height;
        this.Color = color;
        return this;
    }
    Rectangle.extends(Shape);
    Rectangle.prototype.toString = function(){
        console.log('I"m a rectangle:('+this.Point.X+', '+this.Point.Y+') Width:'+this.Width+',Height:'+this.Height+' Color:'+this.Color);
    };
    return Rectangle;
})();

var Line = (function(){
    function Line(startPoint, endPoint, color){
        if(!color.match('#[0-9]+')){
            throw new Error('Color should be in hex format.')
        }
        this.StartPoint = startPoint;
        this.EndPoint = endPoint;
        this.Color = color;
        return this;
    }
    Line.extends(Shape);
    Line.prototype.toString = function(){
        console.log('I"m a line starts from: ('+this.StartPoint.X+', '+this.StartPoint.Y+') ends at: ('+this.EndPoint.X+', '+
        this.EndPoint.Y+') with '+this.Color+' color');
    };
    return Line;
})();

var Segment = (function(){
    function Segment(startPoint, endPoint, color){
        Line.call(this, startPoint, endPoint, color);
        return this;
    }
    Segment.extends(Line);
    Segment.prototype.toString = function() {
       console.log('I"m a segment starts from: (' + this.StartPoint.X + ', ' + this.StartPoint.Y + ')'+
           'ends at: (' + this.EndPoint.X + ', ' + +this.EndPoint.Y + ') with ' + this.Color + ' color');
    };
    return Segment;
})();

var shape = new Shape();
shape.toString();

var circle = new Circle(new Point(1,2),12,'#123456');
circle.toString();

var rect = new Rectangle(new Point(1,1),12,12,'#123456');
rect.toString();

var line = new Line(new Point(0,0), new Point(1,1), '#123456');
line.toString();

var segment = new Segment(new Point(0,0), new Point(1,1), '#123456');
segment.toString();