import React from "react";
import style from "./style.module.scss";

function Navbar() {
  return (
    <div className={style.navbarContainer}>
      <div className={style.navLogo}>
        <span className={style.logoContent}>furni.shop</span>
      </div>
      <nav className={style.NavbarMenu}>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Features</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
      <div className={style.navIcons}>
        <img src='./img/searchIcon.png' alt='Search Icon' />
        <img src='./img/moreIcon.png' alt='Hamburg Menu' />
      </div>
    </div>
  );
}

export default Navbar;
