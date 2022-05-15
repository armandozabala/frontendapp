import React from "react";
import ResultsListItem from "../ResultsListItem/ResultsListItem";

import "./ResultList.scss";

export const ResultsList = ({ items }: any) => {
  return (
    <section className="meli-results-list">
      <div className="meli-grid meli-child-width-1-1">
        {items.length ? (
          items.map((item: any, index: any) => (
            <div key={index}>
              <ResultsListItem data={item} />
            </div>
          ))
        ) : (
          <div>Sin resultados. Prueba buscar otra cosa.</div>
        )}
      </div>
    </section>
  );
};

export default ResultsList;
