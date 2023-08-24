// util function that computes the fibonacci numbers
export function fibonacci(nu:number) :number {
  if (nu < 0) {
    return -1;
  } else if (nu == 0) {
    return 0;
  } else if (nu == 1) {
    return 1;
  }

  return fibonacci(nu - 1) + fibonacci(nu - 2);
}