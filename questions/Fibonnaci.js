const fib_number = 8;

function recur(num) {
  let total = [];
  if (num <= 2) {
    total.push(0, 1, 1);
    return total;
  } else {
    total = recur(num - 1);
    total.push(total[total.length - 1] + total[total.length - 2]);
    return total;
  }
}

function fibonacciSeries(number) {
  let fibo = [0, 1];
  for (var i = 2; i <= number; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

console.log(recur(fib_number));
console.log(fibonacciSeries(fib_number));
