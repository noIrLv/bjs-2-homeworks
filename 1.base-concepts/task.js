//Dz1
"use strict";

function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }
}

const roots1 = solveEquation(1, 0, -9);
console.log(roots1);

const roots2 = solveEquation(1, -4, 4);
console.log(roots2);

const roots3 = solveEquation(2, 3, 1);
console.log(roots3);

//Dz2
"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return false;
  }

  const monthlyPercent = percent / 100 / 12;
  const loanBody = amount - contribution;

  const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));

  const totalPayment = parseFloat((monthlyPayment * countMonths).toFixed(2));

  return totalPayment;
}

const payment1 = calculateTotalMortgage(10, 0, 50000, 12);
console.log(payment1);

const payment2 = calculateTotalMortgage(10, 1000, 50000, 12);
console.log(payment2);

const payment3 = calculateTotalMortgage(10, 0, 20000, 24);
console.log(payment3);

const payment4 = calculateTotalMortgage(10, 1000, 20000, 24);
console.log(payment4);

const payment5 = calculateTotalMortgage(10, 20000, 20000, 24);
console.log(payment5);

const payment6 = calculateTotalMortgage(10, 0, 10000, 36);
console.log(payment6); 

const payment7 = calculateTotalMortgage(15, 0, 10000, 36);
console.log(payment7); 