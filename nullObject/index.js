class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Bob";
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }

  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

const getUser = (id) => {
  const user = users.find((user) => user.id === id);
  return user ? user : new NullUser();
};

const printUser = (id) => {
  const user = getUser(id);
  console.log("Hello " + user.name);

  const access = user.hasAccess();
  access ? console.log("You have access") : console.log("You are not allowed here");
};

printUser(1)
printUser(2)
printUser(34534543)
