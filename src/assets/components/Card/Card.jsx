import React from "react";
import "./Card.css";

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
      <div>
        <div> Слово на португальском:{portuguese}</div>
        <div>Транскрипция: {transcription}</div>
        {this.state.pressed && <div>Перевод: {russian}</div>}
        <button {...props} onClick={this.handleTranslate}>
          {this.state.pressed ? "Посмотреть перевод" : "Скрыть перевод"}
        </button>

        <div>Тэг</div>
      </div>
    );
  }
}
