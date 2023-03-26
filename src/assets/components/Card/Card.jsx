import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  render() {
    const { portuguese, transcription, russian } = this.props;
    return (
      <div>
        <div> Слово на португальском:{portuguese}</div>
        <div>Транскрипция: {transcription}</div>

        <button>Посмотреть перевод</button>
        <div>Перевод: {russian}</div>
        <div>Тэг</div>
      </div>
    );
  }
}
