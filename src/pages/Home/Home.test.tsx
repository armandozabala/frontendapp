import React from "react";
import { mount } from "enzyme";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

describe("Home", () => {
  test("Home", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(wrapper).toBeDefined();
  });
});
