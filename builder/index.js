class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age, phone = "123123", address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

// class UserBuilder {
//   constructor(name) {
//     this.user = new User(name)
//   }

//   setAge(age) {
//     this.user.age = age;
//     return this;
//   }

//   setPhone(phone) {
//     this.user.phone = phone;
//     return this;
//   }

//   setAddress(address) {
//     this.user.address = address;
//     return this;
//   }

//   build() {
//     return this.user
//   }
// }

// let builder = new UserBuilder('Bob').setAge(10).setPhone('123231');
let user = new User("Bob", { age: 10, address: new Address("1", "xyz") });
console.log(user);
