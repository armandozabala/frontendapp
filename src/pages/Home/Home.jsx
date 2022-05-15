import React from "react";
import NavBar from "../../components/atomic/NavBar/NavBar";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Home | Mercado Libre</title>
        <meta
          name="description"
          content="Compra y Vende lo que quieras en Mercado Libre"
        />
      </Helmet>
      <NavBar />
    </main>
  );
};

export default Home;
