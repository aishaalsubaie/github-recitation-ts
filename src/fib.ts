// util function that computes the fibonacci numbers
<<<<<<< HEAD
export function fibonacci(nu:number) :number {
  if (nu < 0) {
=======
export function fibonacci(n:number) :number {
  if (n < 0) {
>>>>>>> main
    return -1;
  } else if (nu == 0) {
    return 0;
  } else if (nu == 1) {
    return 1;
  }

<<<<<<< HEAD
  return fibonacci(nu - 1) + fibonacci(nu - 2);
}
=======
  return fibonacci(n - 1) + fibonacci(n - 2);
}
>>>>>>> main
