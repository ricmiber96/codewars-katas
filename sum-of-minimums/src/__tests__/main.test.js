import { sumOfMinimums } from "../main";
describe("Basic tests", () => {
  it("Function returns ", () => {
  expect(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])).toEqual(9)
  expect(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]])).toEqual(76)
  })
});

