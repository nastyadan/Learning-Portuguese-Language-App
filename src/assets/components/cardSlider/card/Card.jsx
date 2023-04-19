import React from "react";
import cardStyle from "";

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
    const { portuguese, transcription, russian } = this.props;
    return (
      <div className={cardStyle.card}>
        <div className={cardStyle.cardContainer}>
          <div className={cardStyle.wordInPortuguese}>{portuguese}</div>
          <div>Транскрипция: {transcription}</div>
        </div>
        {this.state.pressed && <div>Перевод: {russian}</div>}
        <button onClick={this.handleTranslate} className={cardStyle.cardButton}>
          {this.state.pressed ? "Скрыть перевод" : "Узнать перевод"}
        </button>

        <div className={cardStyle.tag}>Тэг</div>
      </div>
    );
  }
}
