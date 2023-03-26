import React from "react";
import footerStyle from "./Footer.module.scss";
export default class Footer extends React.Component {
  render() {
    return (
      <div className={footerStyle.footer}>
        <nav className={footerStyle.nav}>
          <button className={footerStyle.buttonInNav}>Все слова</button>
          <button className={footerStyle.buttonInNav}>Мой словарь</button>
          <button className={footerStyle.buttonInNav}>Начать тренировку</button>
        </nav>
      </div>
    );
  }
}
