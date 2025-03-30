// syntax
class MyClass {
  // class members
  // 1. constructor
  // 2. methods
}

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    newName.length < 4 ? "Name too short" : (this.name = newName);
  }
}

// let user = new User("John");
// user.sayHi();
console.log(typeof User); // function
console.log(User.prototype.constructor); // function
console.log(User === User.prototype.constructor); // true
console.log(Object.getOwnPropertyNames(User.prototype));
let user = new User("Bernard");
console.log(user);
console.log(user.setName(""));
