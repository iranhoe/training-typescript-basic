const person = {
    name: 'Iran',
    age: 27
};

type Person = typeof person;
type PersonKeys = keyof Person;

type PersonTypes = Person[PersonKeys];

const anotherPerson: Person = {
    name: 'John',
    age: 30
};

// JavaScript
// typeof person // 'object'