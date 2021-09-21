import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="headerImg">
        <img src="https://picsum.photos/100/50" alt="" width="100px" height="50px" />
      </div>
      <div className="navItems">
        <a className="navItem" href="/mint">
          Mint
        </a>
        <a className="navItem" href="/about">
          About
        </a>
      </div>
    </div>
  );
}

export default Header;
