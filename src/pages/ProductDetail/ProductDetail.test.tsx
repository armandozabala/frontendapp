import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import axios, { AxiosStatic } from "axios";
import * as Api from "../../api/api";

const mockedData = {
  data: {
    item: {
      id: 2,
      title: "Producto Casa De 5 Ambientes En Don Torcuato",
      free_shipping: true,
      description: "Producto de prueba",
      condition: "new",
      price: { symbol: "$", amount: 100 },
    },
  },
};

jest.mock("../../api/api", () => ({
  getItemDetails: jest.fn().mockResolvedValue({
    data: {
      item: {
        id: 2,
        title: "Producto Casa De 5 Ambientes En Don Torcuato",
        free_shipping: true,
        description: "Producto de prueba",
        condition: "new",
        price: { symbol: "$", amount: 100 },
      },
    },
  }),
  getItems: jest.fn().mockResolvedValue({
    data: [
      {
        id: "MLA829590869",
        title: "Mochila de madera con cierre de botón",
        price: {
          currency: "ARS",
          amount: 1296,
          decimals: "99",
        },
        picture:
          "http://mla-s2-p.mlstatic.com/829590869-MLA3100827091_062019-I.jpg",
      },
    ],
  }),
}));

describe("ProductDetail", () => {
  const wrapper = mount(
    <MemoryRouter>
      <ProductDetail />
    </MemoryRouter>
  );

  test("ProductDetail", () => {
    expect(wrapper).toBeDefined();
  });
});
