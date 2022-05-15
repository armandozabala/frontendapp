import React from "react";
import ResultList from "./ResultList";
import { mount } from "enzyme";
import { SearchContext } from "../../../context/searchContext";
import { MemoryRouter } from "react-router-dom";

describe("ResultList", () => {
  test("ResultList", () => {
    const items: any = [
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

    const wrapper = mount(
      <MemoryRouter>
        <ResultList items={items} />{" "}
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("ResultList empty", () => {
    const items: any = [];

    const wrapper = mount(
      <MemoryRouter>
        <ResultList items={items} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
