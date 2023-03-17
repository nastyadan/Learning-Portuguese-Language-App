import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div>
        <div> Слово на португальском</div>
        <div>Транскрипция</div>

        <button>Посмотреть перевод</button>
        <div>Перевод</div>
        <div>Тэг</div>
      </div>
    );
  }
}
