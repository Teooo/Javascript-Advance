var Person = (function(){
    function Person(firstname, lastname){
        this.firstName = firstname;
        this.lastName = lastname;
        this.name = this.firtsName+' '+this.lastName;
        return this;
    }
    return Person;
})();


var pesho = new Person('Pesho', ' Peshev');
console.log(pesho.firstName);
