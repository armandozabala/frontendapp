import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/atomic/BreadCrumbs/BreadCrumbs";
import NavBar from "../../components/atomic/NavBar/NavBar";
import ResultsList from "../../components/atomic/ResultList/ResultList";
import "./ProductResult.scss";
import { getItems } from "../../api/api";
import { Items } from "../../models/interfaces";
import { Helmet } from "react-helmet";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductsResult = () => {
  let query = useQuery();
  const [data, setData] = useState<Items>();
  const [loading, setLoading] = useState(false);

  const searchQuery = query.get("search");

  useEffect(() => {
    setLoading(true);
    getItems(searchQuery).then(({ data }: any) => {
      setData(data);
      setLoading(false);
    });
  }, [searchQuery]);

  const loading_class = loading
    ? "meli-content-loading meli-container"
    : "meli-container";

  return (
    <>
      <Helmet>
        <title>Mercado Libre | Productos Resultado </title>
        <meta
          name="description"
          content={`${searchQuery} resultados a listar en Mercado Libre`}
        />
      </Helmet>
      <main className="meli-page-results">
        <NavBar />
        <div className={loading_class}>
          {data && (
            <>
              <Breadcrumbs categories={data.categories} />
              <ResultsList items={data.items} />
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default ProductsResult;
