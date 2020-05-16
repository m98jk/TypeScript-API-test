"use strict";
class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('USER CREATED WITH NAME' + this.name);
    }
}
let mj = new User('Moh.Jawad', 'mj@gm.com', 2);
console.log(mj);
