import getSum from "../ts/getSum";

test(
  "properly adds numbers",
  () => {
    expect(getSum(1, 2))
      .toBe(3)
  }
)