class Person {
    constructor(name, age) {
        this.name = name; // Class property
        this.age = age; // Class property
    }

    greet() {
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 30);
person1.greet();
