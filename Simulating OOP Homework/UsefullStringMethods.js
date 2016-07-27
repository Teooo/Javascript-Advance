/**
 * Created by user on 12.2.2016 г..
 */
String.prototype.startsWith = function(substring){
    var regex = '^'+substring;
    if(this.match(regex)){
        return true;
    }
    return false;
};

String.prototype.endsWith = function(substring){
    var regex = substring+'$';
    if(this.match(regex)){
        return true;
    }
    return false;
};

String.prototype.left = function(count){

    if(count>this.length){
        return this;
    }
    else{
        return this.substr(0,count);
    }
};

String.prototype.right = function(count){

    if(count>this.length){
        return this;
    }
    else{
        return this.substr(this.length-count,this.length);
    }
};

String.prototype.padLeft = function(count, character){
    character = character ||' ';
    return character.repeat(count)+this;
};

String.prototype.padRight = function(count, character){
    character = character ||' ';
    return this+character.repeat(count);
};

String.prototype.repeat = function(count){
    var result = this;
    for(var i=1;i<count;i++){
        result +=this;
    }
    return result;
};

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));


var example = "This is an example string used only for demonstration purposes.";
console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

var example = "This is an example string used only for demonstration purposes.";
console.log(example.left(9));
console.log(example.left(90));

var example = "This is an example string used only for demonstration purposes.";
console.log(example.right(9));
console.log(example.right(90));

var example = "abcdefgh";
console.log(example.left(5).right(2));

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

var hello = "hello";
console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));

console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));
