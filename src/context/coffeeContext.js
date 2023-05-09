import { createContext } from "react";

export const CoffeContext = createContext([
    {
        id: 1,
        title: "Espresso",
        description: 'A strong drink for those who want to wake up.',
        ingredients: 'espresso (30ml)',
        price: 3
    },
    {
        id: 2,
        title: "Americano",
        description: 'A delicious drink for people who love the simplicity and flavor of coffee.',
        ingredients: 'water (90ml), espresso (30ml)',
        price: 3
    },
    {
        id: 3,
        title: "Latte",
        description: 'The delicate taste of milk and the strength of coffee - combined in one',
        ingredients: 'milk (150ml), espresso (50ml)',
        price: 5
    },
    {
        id: 4,
        title: "Bumble Coffee",
        description: 'The delicate taste of milk and the strength of coffee - combined in one',
        ingredients: 'оrange juice (100ml), espresso (100ml), maple syrup (30ml), ice (6 pieces)',
        price: 7
    },
    {
        id: 5,
        title: "Cappuccino",
        description: 'The delicate taste of milk and the strength of coffee - combined in one',
        ingredients: 'milk (80ml), espresso (30ml)',
        price: 5
    },
]);

