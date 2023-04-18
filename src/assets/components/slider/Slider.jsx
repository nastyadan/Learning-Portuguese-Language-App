import React from "react";
import { listOfWords } from "../../data/Data";
import Card from "../card/Card";

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      i: 0,
    };
  }

  handlePlus = () => {
    this.setState((prevState) => ({ i: prevState.handlePlus + 1 }));
  };

  handleMinus = () => {
    this.setState((prevState) => ({ i: prevState.handleMinus - 1 }));
  };
  render() {
    return (
      <div>
        {listOfWords.map((listOfWords) => (
          <Card
            index={this.state.index}
            portuguese={listOfWords.portuguese}
            transcription={listOfWords.transcription}
            russian={listOfWords.russian}
            key={listOfWords.id}
          />
        ))}
        <div>
          <button onClick={this.handlePlus}>1</button>
          <button onClick={this.handleMinus}>2</button>
        </div>
      </div>
    );
  }
}
