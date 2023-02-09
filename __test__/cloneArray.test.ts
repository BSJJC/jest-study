import cloneArray from "../ts/cloneArray";

const testArray = [1, 2, 3, 4, 5];

test(
  "should clone the same array",
  () => {
    expect(
      cloneArray(testArray)
    )
    .toEqual(testArray)
  }
);