interface Person {
    name: string;
    age?: number
}

type MyRequired<T> = {
    -readonly [P in keyof T]-?: T[P]
}

function printAge(person: Required<Person>) {
    return `${person.name} is ${person.age}`;
}


const person: MyRequired<Person> = {
    name: 'Iran',
    age: 27
};

const age = printAge(person);
