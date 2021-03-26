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

const order= (menuName) => {

    const cooking = ({name, time}) => 
        
        new Promise((resolve, reject) => {
            const condition = +Math.random().toFixed();

            setTimeout(() => { 
                condition ? resolve(name) : reject(name)
            }, time);
        });

    Promise.allSettled(menuName.map(cooking))
    .then((result) => {
        const a = result.every(isOrderReady)
        if(a) {

            console.log(a);
            console.log(result);
        } 
    })
    
};
function isOrderReady(result) {

    return result.status === 'fulfilled'
};

const one = order(menu.burger);
const two = order(menu.hotDog);
const three = order(menu.pizza);
const four = order(menu.burger);
const five = order(menu.hotDog);







/*Promise.allSettled([one, two, three, four, five])
.then(result => {

    function isOrderReady(result) {

        return result.status === 'fulfilled'
    };
    console.log(result);
    console.log(result.every(isOrderReady))
})
    
.catch(error => {
        
    console.log(error.message)
        
})*/