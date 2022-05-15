import React from "react";
import { mount } from "enzyme";
import ResultsListItem from "./ResultsListItem";
import { MemoryRouter } from "react-router-dom";

describe("ResultItem", () => {
  test("ResultItem FreShipping and used", () => {
    const item = {
      id: "MLA829590869",
      title: "Mochila de madera con cierre de botón",
      price: {
        currency: "ARS",
        amount: 1299,
        decimals: "99",
      },
      free_shipping: true,
      picture:
        "http://mla-s2-p.mlstatic.com/829590869-MLA3100827091_062019-I.jpg",
    };

    const wrapper = mount(
      <MemoryRouter>
        <ResultsListItem data={item} />{" "}
      </MemoryRouter>
    );
  });

  test("ResultItem FreShipping False and new", () => {
    const item = {
      id: "MLA829590869",
      title: "Mochila de madera con cierre de botón",
      price: {
        currency: "ARS",
        amount: 1299,
        decimals: "99",
      },
      condition: "new",
      free_shipping: false,
      picture:
        "http://mla-s2-p.mlstatic.com/829590869-MLA3100827091_062019-I.jpg",
    };

    const wrapper = mount(
      <MemoryRouter>
        <ResultsListItem data={item} />{" "}
      </MemoryRouter>
    );
  });
});
