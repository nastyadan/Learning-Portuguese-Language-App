import React from "react";
import "../styles/footer.css";
export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <nav>
          <button>Все слова</button>
          <button>Мой словарь</button>
          <button>Начать тренировку</button>
        </nav>
      </div>
    );
  }
}
