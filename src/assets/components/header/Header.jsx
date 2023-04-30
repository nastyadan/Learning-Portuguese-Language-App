import React from "react";
import headerStyles from "../footer/Footer.module.scss";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className={headerStyles.footer}>
        <nav className={headerStyles.nav}>
          <Link to="/home">
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
