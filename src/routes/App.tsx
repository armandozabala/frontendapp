import { SearchContext } from "../context/searchContext";
import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import ProductsResult from "../Pages/ProductsResult/ProductsResult";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items">
              <Route index={true} element={<ProductsResult />} />
              <Route index={false} path=":id" element={<ProductDetail />} />
            </Route>
          </Routes>
        </Router>
      </SearchContext.Provider>
    </>
  );
};

export default App;
