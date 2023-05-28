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
  constructor(props) {
    super(props);
    this.buttonReference = React.createRef();
  }
  state = {
    currentCardIndex: this.props.defaultCardIndex || 0,
    translated: false,
    alertMessage: false,
    count: 0,
    viewedTranslations: [],
  };
  componentDidMount() {
    this.buttonReference.current.focus();
  }
  handleTranslate = () => {
    const { currentCardIndex, viewedTranslations } = this.state;
    const currentTranslation = listOfWords[currentCardIndex].russian;

    if (!viewedTranslations.includes(currentTranslation)) {
      this.setState((prevState) => ({
        translated: !prevState.translated,
        count: prevState.count + 1,
        viewedTranslations: [
          ...prevState.viewedTranslations,
          currentTranslation,
        ],
      }));
    } else {
      this.setState((prevState) => ({
        translated: !prevState.translated,
      }));
    }
    if (this.buttonReference.current) {
      this.buttonReference.current.blur();
    }
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
    const { english, transcription, russian } = currentCard;
    let count = this.state.count;
    let alertMessage = <AlertMessage className={cardStyle.alertMessage} />;

    return (
      <>
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
              <div className={cardStyle.wordInenglish}>{english}</div>
              <div>{transcription}</div>
              <div>
                {this.state.translated && (
                  <div className={cardStyle.wordInRussian}>{russian}</div>
                )}
                <button
                  ref={this.buttonReference}
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
        <div>Изучено слов: {count} </div>
        {this.state.alertMessage && alertMessage}
      </>
    );
  }
}
Slider.defaultProps = {
  defaultCardIndex: 0,
};
