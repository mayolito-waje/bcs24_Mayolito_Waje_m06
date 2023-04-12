function oddEvenChecker(num) {
  if (typeof num !== 'number') {
    console.log('Invalid input');
    return;
  }

  num % 2 == 0
    ? console.log('The number is even')
    : console.log('The number is odd');
}

oddEvenChecker(24);
oddEvenChecker(5);
oddEvenChecker('25');

function budgetChecker(num) {
  if (typeof num !== 'number') {
    print('Please pass a number argument');
    return;
  }

  num > 40000
    ? console.log('You are over the budget')
    : console.log('You have resources left');
}
