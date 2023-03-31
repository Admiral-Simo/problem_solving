function add(a, b) {
  let sum = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;
    const digitSum = digitA + digitB + carry;
    carry = Math.floor(digitSum / 10);
    sum = (digitSum % 10).toString() + sum;
    i--;
    j--;
  }

  return sum;
}

function expand(expr) {
  const powerRegex = /(?<=\^)\d+/;
  const formulaRegex = /(?<=\().+(?=\))/;
  const aRegex = /[-]?\d+(?=\w)/;
  const bRegex = /(?<=[a-z]).+/;

  // test
  const match2 = expr.match(formulaRegex);
  const aMatch = expr.match(aRegex);
  const match = expr.match(powerRegex);

  // test

  if (match) {
    const power = parseInt(match[0]);
    const formula = match2[0];
    console.log(formula.match(aRegex)[0]);

    console.log(power);
    console.log(formula);
  }

  return -1;
}

console.log(expand("(-12t+43)^2"));
// returns "144t^2-1032t+1849"
