import React from "react";
import headerStyles from "./Header.module.scss";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className={headerStyles.header}>
        <nav className={headerStyles.nav}>
          <Link to="/">
            <button className={headerStyles.buttonInNav}>На главную</button>
          </Link>
          <Link to="/table">
            <button className={headerStyles.buttonInNav}>Список слов</button>
          </Link>
          <Link to="/cards">
            <button className={headerStyles.buttonInNav}>
              Смотреть карточки
            </button>
          </Link>
        </nav>
      </div>
    );
  }
}
