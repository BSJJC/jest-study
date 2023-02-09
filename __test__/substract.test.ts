import substract from "../ts/substract";

test(
  "num1 should minus num2",
  () => {
    expect(
      substract(3,1)
    )
      .toBe(2)
  }
)