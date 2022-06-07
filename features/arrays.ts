const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// TS array advantages
// Help with inference when extracting values
const car = carMakers[0];  // string
const myCar = carMakers.pop()  // string

// Prevent incompatible values
// carMakers.push(100); => error type

// Help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());