let currentResult = 0;

// Expected return value: 14
currentResult = (currentResult + 10) * 3 / 2 - 1;

// Expected value is stringified version of above calculation.
let calculationDescription = '(' + currentResult + ' + 10) * 3 / 2 - 1';

outputResult(currentResult, calculationDescription);
