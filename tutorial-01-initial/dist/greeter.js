"use strict";
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
const greeter = (person) => {
    return "Hello," + person.firstName + " " + person.lastName;
};
// let user = { firstName: "Jane", lastName: "User" };
let user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
