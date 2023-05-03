import React from "react";
import footerStyles from "./Footer.module.scss";
import { Link } from "react-router-dom";
export default class Footer extends React.Component {
  render() {
    return (
      <div className={footerStyles.footer}>
        <nav className={footerStyles.nav}>
          <Link to="/">
            <button className={footerStyles.buttonInNav}>На главную</button>
          </Link>
          <Link to="/table">
            <button className={footerStyles.buttonInNav}>Список слов</button>
          </Link>
          <Link to="/cards">
            <button className={footerStyles.buttonInNav}>
              Смотреть карточки
            </button>
          </Link>
        </nav>
      </div>
    );
  }
}
