interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

var customer: IPerson = {
  firstName: "tm",
  lastName: "burtonn",
  sayHi() {
    return this.firstName;
  }
};
