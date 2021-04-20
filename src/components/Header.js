import React from "react";

import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="header-main">
      <div className="header-title">
        <p>
          It's always sunny in
          <span className="material-icons">wb_sunny</span>
        </p>
        <h1>Gothenburg</h1>
      </div>
    </header>
  );
};

export default Header;
