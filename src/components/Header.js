import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
const Header = ({ searchHandler, setquery, query, trending, popular }) => {
  return (
    <div className="header">
      <div className="header__left">
        {/* logo */}
        <a href="/">
          <img className="logoImg" src="images/logo.jpg" alt="PRIME" />
        </a>
        {/* menu > hamburger */}
        {/* <MenuIcon /> */}
      </div>

      <div className="header__mid">
        {/* searchbar */}
        <div className="searchBar">
          <form onSubmit={searchHandler}>
            <input
              id="search"
              className="form-control"
              type="text"
              placeholder="Search Movies..."
              aria-label="default input example"
              autoComplete="off"
              value={query}
              onChange={setquery}
            />

            <SearchIcon onClick={searchHandler}/>
          </form>
        </div>
        {/* pro */}
        <div className="header__mid_link">
          <Button variant="outlined">PRO</Button>
          {/* <li className="headerMid__list">
            <a href="/" className="listLink">
              ProV-
            </a>
          </li> */}
        </div>
      </div>
      {/* now_playing */}

      <div className="header__right">
        {/* <li className="headerMid__list">
          <a href="/" className="listLink">
            Trending
          </a>
        </li> */}
        <Button onClick={trending} variant="contained">
          Trending
        </Button>
        <Button onClick={popular} variant="contained">
          Popular
        </Button>
        {/* <li className="headerMid__list">
          <a href="/" className="listLink">
            Latest
          </a>
        </li> */}
      </div>
    </div>
  );
};

export default Header;
