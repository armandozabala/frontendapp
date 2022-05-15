import React from "react";
import { mount } from "enzyme";
import BreadCrumbs from "./BreadCrumbs";

describe("BreadCrumbs Suite", () => {
  test("BreadCrumbs should render correctly", () => {
    const items = ["Home", "Categories", "Products"];
    const wrapper = mount(<BreadCrumbs categories={items} />);

    wrapper.find("a").at(0).simulate("click");
    expect(wrapper).toBeDefined();
  });
});
