import React from "react";
import "../styles/header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav>
          <button>Все слова</button>
          <button>Мой словарь</button>
          <button>Начать тренировку</button>
        </nav>
      </div>
    );
  }
}
