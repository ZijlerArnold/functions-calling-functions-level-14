const log = console.log;
log('');
log('============Functions calling functions:==============');
log('');
log('=====Hey kiddo=======');
const adultChecker = age => {
    if (age >= 18) {
        return true;
    }
    return false;
};
adultChecker();

const greet = age => {
    log(`The input value is = ${age}`);
    let isAdult = adultChecker(age);
    log(`The person age to be a adult = ${isAdult}`);
    if (isAdult === true) {
       return 'Hello there';
    }
    return 'Hey kiddo';
};
let  result = greet(17);
log(result);
log('');
log('');




log('===========VAT calculations===========');

log('=====VAT exercise 1=======');
let basePrice = 1000;
VatPercentage = 0.21;

const vatAmoundMaker = (num1, num2) => {
    let vat = num1 * num2;
    return vat;
};


const giveFullPrice = (num1, num2) => {
    log(`Input Base Price = ${num1}`);
    log(`Vat percentage = ${num2}`);
    let vatAmount = vatAmoundMaker(num1, num2);
    log(`Vat Amound = ${vatAmount}`)
    let totalFullPrice = num1 * 1.21;
    return totalFullPrice;
};
let result1 = giveFullPrice(basePrice, VatPercentage);
log(`Output total Full Price = ${result1}`);
log('');
log('');





log('=====VAT exercise 2=======');
let fullPriceComputer = 1210;
VatPercentage = 0.21;

const basePriceCalc = (num) => {
    let basePriceComputer = num / 1.21;
    log(basePrice)
};
basePriceCalc(fullPriceComputer)



const basePriceAndVatAmoundCalculator = (num1, num2) => {

};
basePriceAndVatAmoundCalculator(1210);
log('');
log('Ik snap de bedoeling van de oefening, raak in de war van de gegeven gegevens van de vraag, ik ga verder.')