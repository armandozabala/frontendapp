import React, { useContext, useEffect, useState } from "react";
import "./NavBar.scss";
import logo from "@assets/images/Logo_ML.png";

import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../context/searchContext";

const NavBar = ({ query }) => {
  console.log("object", query);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(query);
  const { search, setSearch } = useContext(SearchContext);

  useEffect(() => {
    setInputValue(search);
  }, [search]);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
    setSearch(event.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (search.trim().length > 2) {
      navigate(`/items?search=${search}`);
    }
  };
  return (
    <>
      <header className="meli-search-navbar">
        <div className="meli-container">
          <div className="meli-grid meli-flex-middle">
            <div className="meli-width-auto">
              <a className="meli-search-navbar-logo" href="/">
                <img src={logo} alt="Mercadolibre" width="56" height="36" />
              </a>
            </div>

            <div className="meli-width-expand">
              <form className="meli-search-navbar-form" onSubmit={handleSubmit}>
                <input
                  name="input-search"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Nunca dejes de buscar"
                  className="meli-search-input"
                />
                <button className="meli-search-button" type="submit"></button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
