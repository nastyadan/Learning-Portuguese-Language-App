import React, { useState } from "react";
import cardStyle from "../cardSlider/CardSlider.module.scss";
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
      translated: false,
      alertMessage: false,
    };
  }
  handleTranslate = () => {
    this.setState({
      translated: !this.state.translated,
    });
  };

  handlePrevCard = () => {
    const { currentCardIndex } = this.state;
    const prevCardIndex = currentCardIndex - 1;
    if (prevCardIndex >= 0) {
      this.setState({
        currentCardIndex: prevCardIndex,
        translated: false,
        alertMessage: false,
      });
    } else {
      this.setState({
        currentCardIndex: listOfWords.length - 1,
        translated: false,
        alertMessage: false,
      });
    }
  };

  handleNextCard = (props) => {
    const { currentCardIndex } = this.state;
    const nextCardIndex = currentCardIndex + 1;
    if (nextCardIndex < listOfWords.length) {
      this.setState({
        currentCardIndex: nextCardIndex,
        translated: false,
        alertMessage: false,
      });
    } else {
      this.setState({
        currentCardIndex: 0,
        translated: false,
        alertMessage: true,
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
        {this.state.alertMessage && alertMessage}
        <div className={cardStyle.sliderConteiner}>
          <div>
            <button
              className={cardStyle.sliderButton}
              onClick={this.handlePrevCard}
            >
              Назад
            </button>
          </div>
          <div className={cardStyle.card}>
            <div className={cardStyle.cardContainer}>
              <div className={cardStyle.wordInPortuguese}>{portuguese}</div>
              <div>{transcription}</div>
              <div>
                {this.state.translated && (
                  <div className={cardStyle.wordInRussian}>{russian}</div>
                )}
                <button
                  onClick={this.handleTranslate}
                  className={cardStyle.cardButton}
                >
                  {this.state.translated ? "Скрыть перевод" : "Узнать перевод"}
                </button>
              </div>
            </div>
          </div>
          <div>
            <button
              className={cardStyle.sliderButton}
              onClick={this.handleNextCard}
            >
              Вперед
            </button>
          </div>
        </div>
      </>
    );
  }
}
