import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../../components/atomic/NavBar/NavBar";
import Breadcrumbs from "../../components/atomic/BreadCrumbs/BreadCrumbs";
import ItemDetails from "../../components/atomic/ItemDetails/ItemDetails";
import { getItemDetails } from "../../api/api";
import { Item } from "../../models/interfaces";
import { Helmet } from "react-helmet";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Item>();

  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const getDetails = async () => {
      const { data } = await getItemDetails(id);
      setData(data);
      setLoading(false);
    };

    getDetails();
  }, []);

  const loading_class = loading
    ? "meli-content-loading meli-container"
    : "meli-container";

  return (
    <>
      <Helmet>
        <title> Mercado Libre</title>
        <meta name="description" content={`Detalle de productos`} />
      </Helmet>
      <main className="meli-page-details">
        <NavBar />
        {data && (
          <div className={loading_class}>
            <Breadcrumbs categories={data.categories} />
            <ItemDetails item={data.item} />
          </div>
        )}
      </main>
    </>
  );
};

export default ProductDetail;
