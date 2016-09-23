function loop(base, exponent) {
  let total = 1;
  for (var i = 1; i <= exponent; i++) {
    total *= base;
  }
  return total;
}

console.log(loop(4, 4));

function recursion(base, exponent) {
  let total = 1;
  if (exponent > 0) {
    total = base * recursion(base, exponent-1);
  }
  return total;
}

console.log(recursion(5, 2));
