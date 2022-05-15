import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import ProductsResult from "./ProductsResult";
import axios from "axios";
import { getItemDetails, getItems } from "../../api/api";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";

import * as API from "../../api/api";

jest.mock("../../api/api", () => ({
  getItemDetails: jest.fn().mockResolvedValue({}),
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

describe("ProductResult", () => {
  const items = [
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
  ];
  test("ProductResult", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProductsResult />
      </MemoryRouter>
    );

    expect(wrapper).toBeDefined();
  });
});
