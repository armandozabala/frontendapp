import React from "react";

import "./BreadCrumbs.scss";
import { BreadCrumbsList } from "./BreadCrumbsList/BreadCrumbsList";

export const Breadcrumbs = ({ categories }: any) => {
  if (categories == null) return <></>;
  return (
    <section className="meli-breadcrumbs">
      <ol className="meli-breadcrumbs-nav">
        <BreadCrumbsList categories={categories} />
      </ol>
    </section>
  );
};

export default Breadcrumbs;
