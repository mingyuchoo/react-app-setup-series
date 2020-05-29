class ParentClass {
  static readonly parentReadOnly = 1;
  static readonly parentObject = { parent: 1, name: "Adam" };
}

class ChildClass extends ParentClass {
  static readonly childReadOnly = 2;
  static readonly childObject = { child: 2, name: "Abraham" };
}

let child: ChildClass;
child = new ChildClass();

// ParentClass
console.log(ParentClass.parentReadOnly);
console.log(ParentClass.parentObject.name);

// ChildClass
console.log(ChildClass.parentReadOnly);
console.log(ChildClass.parentObject.parent);
console.log(ChildClass.childReadOnly);
console.log(ChildClass.childObject.name);
