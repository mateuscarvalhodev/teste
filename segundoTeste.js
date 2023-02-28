const fibonacciSequence = (number) => {
  let x = 0;
  let y = 1;
  let z;

  while ( y < number) {
    z = x + y;
    x = y;
    y = z;
  }
  if (y == number) {
    console.log(`o ${number} pertence a sequencia de Fibonacci`)
  } else {
    console.log(`o ${number} não pertence a sequencia de Fibonacci`)
  }
} 

fibonacciSequence(34);
fibonacciSequence(55);
fibonacciSequence(89);
