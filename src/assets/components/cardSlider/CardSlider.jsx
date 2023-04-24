import React, { useState } from "react";
import cardStyle from "../cardSlider/Card.module.scss";
import { listOfWords } from "../../data/Data";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertMessage() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Alert show={show} variant="light">
        <Alert.Heading>Ура! Вы изучили все слова!</Alert.Heading>
        <p>Повторение – мать учения. </p>
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="outline-danger">
            Закрыть
          </Button>
        </div>
      </Alert>
    </>
  );
}
export default class Slider extends React.Component {
  static defaultProps = {
    defaultCardIndex: 0,
  };
  constructor(props) {
    super(props);

    this.state = {
      currentCardIndex: props.defaultCardIndex,
      pressed: false,
      alert: false,
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
      this.setState({
        currentCardIndex: listOfWords.length - 1,
        pressed: false,
      });
    }
  };

  handleNextCard = (props) => {
    const { currentCardIndex } = this.state;
    const nextCardIndex = currentCardIndex + 1;
    if (nextCardIndex < listOfWords.length) {
      this.setState({
        currentCardIndex: nextCardIndex,
        pressed: false,
        alert: false,
      });
    } else {
      this.setState({
        currentCardIndex: 0,
        pressed: false,
        alert: true,
      });
    }
  };
  render() {
    const { currentCardIndex } = this.state;
    const currentCard = listOfWords[currentCardIndex];
    const { portuguese, transcription, russian } = currentCard;
    let alertMessage = <AlertMessage />;

    return (
      <>
        {this.state.alert && alertMessage}
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
          <button
            onClick={this.handleTranslate}
            className={cardStyle.cardButton}
          >
            {this.state.pressed ? "Скрыть перевод" : "Узнать перевод"}
          </button>
        </div>
      </>
    );
  }
}
