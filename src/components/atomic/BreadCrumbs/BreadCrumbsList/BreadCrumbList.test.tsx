import React from "react";
import { mount } from "enzyme";

import { BreadCrumbsList } from "./BreadCrumbsList";

describe("ProductsResult Suite", () => {
  test("ProductsResult should render correctly", () => {
    const items = ["Home", "Categories", "Products"];
    const wrapper = mount(<BreadCrumbsList categories={items} />);

    wrapper.find("a").at(0).simulate("click");
    expect(wrapper).toBeDefined();
  });
});
