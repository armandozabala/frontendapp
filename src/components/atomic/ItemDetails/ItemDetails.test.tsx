import React from "react";
import { mount } from "enzyme";
import ItemDetails from "./ItemDetails";

describe("ItemDetail Suite", () => {
  test("ItemDetail should render correctly", () => {
    const item = {
      id: 2,
      title: "Producto Casa De 5 Ambientes En Don Torcuato",
      free_shipping: true,
      description: "Producto de prueba",
      condition: "new",
      price: { symbol: "$", amount: 100 },
    };

    const wrapper = mount(<ItemDetails item={item} />);

    expect(wrapper).toBeDefined();
  });

  test("ItemDetail without any items", () => {
    const item = {
      id: 2,
      title: "Producto Casa De 5 Ambientes En Don Torcuato",
      free_shipping: true,
      description: "Producto de prueba",
      price: { amount: 100 },
    };

    const wrapper = mount(<ItemDetails item={item} />);

    expect(wrapper).toBeDefined();
  });

  test("ItemDetail should render item == null", () => {
    const item = null;

    const wrapper = mount(<ItemDetails item={item} />);

    expect(wrapper).toBeDefined();
  });
});
