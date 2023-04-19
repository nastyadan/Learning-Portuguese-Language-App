import React from "react";
import cardStyle from "../cardSlider/Card.module.scss";
import { listOfWords } from "../../data/Data";

export default class Slider extends React.Component {
  static defaultProps = {
    defaultCardIndex: 0,
  };
  constructor(props) {
    super(props);

    this.state = {
      currentCardIndex: props.defaultCardIndex,
      pressed: false,
    };
  }
  handleTranslate = () => {
    this.setState({
      pressed: !this.state.pressed,
    });
  };
  handlePrevCard = () => {
    const { currentCardIndex } = this.state;
    const prevCardIndex = currentCardIndex - 1;
    if (prevCardIndex >= 0) {
      this.setState({
        currentCardIndex: prevCardIndex,
        pressed: false,
      });
    } else {
    }
  };

  handleNextCard = () => {
    const { currentCardIndex } = this.state;
    const nextCardIndex = currentCardIndex + 1;
    if (nextCardIndex < listOfWords.length) {
      this.setState({
        currentCardIndex: nextCardIndex,
        pressed: false,
      });
    }
  };
  render() {
    const { currentCardIndex } = this.state;
    const currentCard = listOfWords[currentCardIndex];
    const { portuguese, transcription, russian } = currentCard;
    return (
      <div className={cardStyle.card}>
        <div>
          <button onClick={this.handlePrevCard}>Previous</button>
          <button onClick={this.handleNextCard}>Next</button>
        </div>
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
