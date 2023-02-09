const getSum = (...numbers: number[]): number => {
  return numbers.reduce((totle, number) => totle + number, 0);
};