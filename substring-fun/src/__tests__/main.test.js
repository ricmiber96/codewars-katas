import { mainFuction } from "../main";
describe("Main function test", () => {
  it("Function returns empty string", () => {
    expect(mainFuction([])).toEqual('');
  })
  it("Function returns fun subtring", () => {
    expect(mainFuction(['yoda', 'best', 'has'])).toEqual('yes');
  })
})
