import React from "react";
import { SearchContext } from "../context/searchContext";
import { mount } from "enzyme";
import App from "./App";

describe("App", () => {
  test("App mostrar el home", () => {
    const wrapper = mount(
      <SearchContext.Provider value={{ search: "", setSearch: jest.fn() }}>
        <App />
      </SearchContext.Provider>
    );

    expect(wrapper).toBeDefined();
  });
});
