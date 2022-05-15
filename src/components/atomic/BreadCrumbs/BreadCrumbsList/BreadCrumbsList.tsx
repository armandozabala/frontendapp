import React from "react";

export const BreadCrumbsList = ({ categories }: any) => {
  return (
    <>
      {categories.map((item: any, i: any, a: any) => {
        const active = i === a.length - 1;
        const classes = active ? "meli-active" : "";

        return (
          <li className={classes} key={i}>
            <a id="clickItem" href="/" onClick={(e) => e.preventDefault()}>
              {item}
            </a>
          </li>
        );
      })}
    </>
  );
};
