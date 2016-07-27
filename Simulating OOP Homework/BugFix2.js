var Person = (function(){
    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        Object.defineProperty(this, "fullName", {
            get: function () {
                return this.firstName+" "+this.lastName;
            },
            set:function(fullName){
                var nameParts = fullName.split(/\s+/);
                this.firstName = nameParts[0];
                this.lastName = nameParts[1];
            }
        });


        return this;
    }

    return Person;
})();


var pesho = new Person('pesho', 'pesho');
console.log(pesho.firstName);
pesho.fullName =  "dassd dsadsa";
console.log(pesho.firstName);

