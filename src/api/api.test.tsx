import { getItemDetails, getItems } from "./api";

describe("api", () => {
  test("api getItems", () => {
    getItems("ropa").then((items: any) => {
      expect(items).toBeDefined();
    });
  });

  test("api getItemDetails ", () => {
    getItemDetails("ML556").then((items: any) => {
      expect(items).toBeDefined();
    });
  });
});
