let courses = [
    {
        name: 'Javascript',
        coin: 200
    },
    {
        name: 'PHP',
        coin: 100
    },
    {
        name: 'Vuejs',
        coin: 50
    },
    {
        name: 'Bootstrap-4',
        coin: 20
    },
    {
        name: 'Bootstrap-3',
        coin: 5
    }
];

// let newCourses = courses.map(function(coure, index){
//     return {
//         name: coure.name,
//         coin: coure.coin,
//         textCoin: `So tien coin can la ${coure.coin}`
//     }
// });
// console.log(newCourses);
let totalCoins = courses.reduce(function(previousValue, currentValue, currentIndex, array){
    console.log(`previousValue: ${previousValue}`,`currentValue: ${currentValue.coin}` ,`currentIndex: ${currentIndex}`);
    previousValue += currentValue.coin;
    return previousValue;
}, 0); 
console.log(totalCoins);
console.log(courses);