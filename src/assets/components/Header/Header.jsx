import React from "react";
//import headerStyles from "./Header.module.scss";
import headerStyles from "../footer/Footer.module.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div className={headerStyles.footer}>
        <nav className={headerStyles.nav}>
          <button className={headerStyles.buttonInNav}>Все слова</button>
          <button className={headerStyles.buttonInNav}>Мой словарь</button>
          <button className={headerStyles.buttonInNav}>
            Начать тренировку
          </button>
        </nav>
      </div>
    );
  }
}
