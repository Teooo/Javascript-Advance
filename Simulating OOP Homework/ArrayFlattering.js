Array.prototype.flatten = function (){
    var result = [];

    function recursiveArrTraverse(arr){
        for (var index in arr) {
            if (Array.isArray(arr[index])){
                recursiveArrTraverse(arr[index]);
            }else {
                result.push(arr[index]);
            }
        }
        result.splice(result.length-1, 1);
    }

    recursiveArrTraverse(this);
    return result;
};

var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());


