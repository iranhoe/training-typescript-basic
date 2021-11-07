const person = {
    name: 'Iran',
    age: 27
};

type Person = typeof person;

const anotherPerson: Person = {
    name: 'John',
    age: 30
};

// JavaScript
// typeof person // 'object'