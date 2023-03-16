class Employee {
    #counter = 10;
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    #increment() {
        return this.#counter++;
    }

    #introduceEmployee() {
        this.#increment()
        console.log(`Hello my name is ${this.name} - ${this.#increment()}`)
    }
    say(){
        this.#introduceEmployee()
    }
}

class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        this.job = "Manager";
    }

    introduce() {
        super.say()
        console.log(`I am a ${this.job}`);
    }
}

const aldi = new Employee("Adi", 20);
const Rifan = new Manager("Rifan", 21);

aldi.say()
Rifan.introduce()