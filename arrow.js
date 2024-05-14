//Exercise 2.1 create a expression function for checking if a number is even//

function evenNum(x) {
    x % 2 === 0 ? console.log('even') : console.log('odd');
};

evenNum(10);


//Exercise 2.2 create a expression function for checking if a number is odd//


const checkEven = x =>  x % 2 === 0 ? console.log('even') : console.log('odd');

checkEven(9);