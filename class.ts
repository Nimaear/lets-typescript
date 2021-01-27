class Person {
  declare name: string;
  declare lastName: string;

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }

  sayMyName() {
    console.log(this.toString());
  }

  protected toString() {
    return `${this.name} ${this.lastName}`;
  }
}

const me = new Person('Oz', 'Ayten');
me.sayMyName();