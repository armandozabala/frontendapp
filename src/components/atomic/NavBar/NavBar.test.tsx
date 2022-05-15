import React from "react";
import { mount } from "enzyme";
import { SearchContext } from "../../../context/SearchContext";
import NavBar from "./NavBar";
import { MemoryRouter, Router } from "react-router-dom";

describe("NavBar", () => {
  const wrapper = mount(
    <MemoryRouter>
      <SearchContext.Provider
        value={{ search: "Camisa", setSearch: jest.fn() }}
      >
        <NavBar />
      </SearchContext.Provider>
    </MemoryRouter>
  );
  test("debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("simulate input", () => {
    const input = wrapper.find(".meli-search-input").at(0);
    input.simulate("change", {
      target: { value: "Ropa" },
    });

    expect(wrapper.find(".meli-search-input").at(0).props().value).toBe("Ropa");
  });

  test("simulate button", () => {
    const wrapper = mount(
      <MemoryRouter>
        <SearchContext.Provider
          value={{ search: "Camisa", setSearch: jest.fn() }}
        >
          <NavBar />
        </SearchContext.Provider>
      </MemoryRouter>
    );
    const input = wrapper.find(".meli-search-input").at(0);
    input.simulate("change", {
      target: { value: "Camisa" },
    });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
  });

  test("simulate button", () => {
    const wrapper = mount(
      <MemoryRouter>
        <SearchContext.Provider value={{ search: "", setSearch: jest.fn() }}>
          <NavBar />
        </SearchContext.Provider>
      </MemoryRouter>
    );
    const input = wrapper.find(".meli-search-input").at(0);
    input.simulate("change", {
      target: { value: "" },
    });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
  });
});
