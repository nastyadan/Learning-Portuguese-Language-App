import React from "react";
import cardStyle from "./Card.module.scss";

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
    };
  }
  handleTranslate = () => {
    this.setState({
      pressed: !this.state.pressed,
    });
  };
  render() {
    const { portuguese, transcription, russian, ...props } = this.props;
    return (
      <div className={cardStyle.card}>
        <div className={cardStyle.cardContainer}>
          <div className={cardStyle.wordInPortuguese}>{portuguese}</div>
          <div>Транскрипция: {transcription}</div>
        </div>
        {this.state.pressed && <div>Перевод: {russian}</div>}
        <button
          {...props}
          onClick={this.handleTranslate}
          className={cardStyle.cardButton}
        >
          {this.state.pressed ? "Посмотреть перевод" : "Скрыть перевод"}
        </button>

        <div className={cardStyle.tag}>Тэг</div>
      </div>
    );
  }
}
