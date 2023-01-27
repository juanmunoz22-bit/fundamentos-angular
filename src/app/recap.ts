class Person {

    constructor(
        private age: number,
        public lastName: string
    ) { }

    get getAge() {
        return this.age;
    }

    set setAge(age: number) {
        this.age = age;
    }
}

const juan = new Person(15, 'Muñoz');
juan.getAge;