const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni'],
};

function order({name: pizzaName, toppings: pizzaToppings}) {
    return { pizzaName, pizzaToppings };
}

const { pizzaName } = order(pizza);

order(pizza);

const toppings  = ['pepperoni', 'bacon', 'chili'];

const [ first, second, third ] = toppings;

console.log(first, second, third);

function logToppings([first, second, third]: any) {
    console.log(first, second, third);
}

logToppings(toppings);