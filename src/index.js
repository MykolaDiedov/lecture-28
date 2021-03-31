const menu = {
    burger: [
        {
            name: '🍔',
            time: 3000
        },
        {
            name: '🍟',
            time: 750
        },
        {
            name: '🥤',
            time: 500
        }
    ],
    hotDog: [
        {
            name: '🌭',
            time: 2000
        },
        {
            name: '🍺',
            time: 500
        }
    ],
    pizza: [
        {
            name: '🍕',
            time: 2500
        },
        {
            name: '🥃',
            time: 250
        }
    ]
};
const order = async (menuName) => {

    const cooking = ({name, time}) =>

        new Promise((resolve, reject) => {

            const condition = +Math.random().toFixed();

            setTimeout(() => {
                condition ? resolve(name) : reject(name);
            }, time);
        });

    const readyOrder = await Promise.allSettled(menuName.map(cooking));

    if (readyOrder.every((a) => a.status === 'fulfilled')) {
        readyOrder.complete = true;

        return readyOrder;
    } else {
        readyOrder.complete = false;

        return readyOrder;
    }
};

const one = order(menu.burger);
const two = order(menu.hotDog);
const three = order(menu.pizza);
const four = order(menu.burger);
const five = order(menu.hotDog);


const resultOrderArray = [one, two, three, four, five];

Promise.allSettled(resultOrderArray)
    .then(results => {
        const completedOrders = results.filter(a => a.value.complete === true);

        if (completedOrders.length >= 2 ) {

            console.log(completedOrders);
        } else {

            console.log('many orders  are failed');
        }
    });
