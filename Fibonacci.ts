// Verificar se um número pertence à sequência de Fibonacci

function isFibonacci(numero: number): boolean {
  let a = 0;
  let b = 1;
  let temp = 0;

  while (b <= numero) {
    if (b === numero) return true;
    temp = a + b;
    a = b;
    b = temp;
  }
  return false;
}

const numero = 150;
console.log(
  `O número ${numero} ${
    isFibonacci(numero) ? "pertence" : "não pertence"
  } à sequência de Fibonacci.`
);
