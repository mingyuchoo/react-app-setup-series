"use strict";
class ParentClass {
}
ParentClass.parentReadOnly = 1;
ParentClass.parentObject = { parent: 1, name: "Adam" };
class ChildClass extends ParentClass {
}
ChildClass.childReadOnly = 2;
ChildClass.childObject = { child: 2, name: "Abraham" };
let child;
child = new ChildClass();
// ParentClass
console.log(ParentClass.parentReadOnly);
console.log(ParentClass.parentObject.name);
// ChildClass
console.log(ChildClass.parentReadOnly);
console.log(ChildClass.parentObject.parent);
console.log(ChildClass.childReadOnly);
console.log(ChildClass.childObject.name);
