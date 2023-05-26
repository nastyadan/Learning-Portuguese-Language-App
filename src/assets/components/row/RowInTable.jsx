import React from "react";
import tableStyles from "../allWordsTable/AllWordsTable.module.scss";

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    let couldbechanged = props.couldbechanged;
    this.state = {
      clicked: couldbechanged,
      portuguese: "",
      transcription: "",
      russian: "",
      errorInInput: false,
      emptyInputRussian: false,
      emptyInputTranscription: false,
      emptyInputPortuguese: false,
      colorOfInputRussian: "",
      colorOfInputTranscription: "",
      colorOfInputPortuguese: "",
    };
  }
  handleChange = () => {
    this.setState({
      clicked: !this.state.clicked,
      emptyInputRussian: true,
      emptyInputTranscription: true,
      emptyInputPortuguese: true,
    });
  };
  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const result = /[^a-z]/gi;

    this.setState({ [name]: value });
    if (result.test(value)) {
      this.setState({
        errorInInput: true,
      });
    } else {
      this.setState({
        errorInInput: false,
      });
    }
  };

  blurHandlerPortuguese = (e) => {
    const value = e.target.value;
    const result = /[^a-z]/gi;

    const emptyInput = "";
    if (emptyInput !== value) {
      this.setState({
        emptyInputPortuguese: false,
        colorOfInputPortuguese: "",
      });
    } else {
      this.setState({
        emptyInputPortuguese: true,
        colorOfInputPortuguese: "red",
      });
    }
    if (result.test(value)) {
      this.setState({
        errorInInput: true,
        colorOfInputPortuguese: "red",
      });
    } else {
      this.setState({
        errorInInput: false,
      });
    }
  };
  blurHandlerTranscription = (e) => {
    const value = e.target.value;
    const result = /[^a-z]/gi;
    const emptyInput = "";
    if (emptyInput !== value) {
      this.setState({
        emptyInputTranscription: false,
        colorOfInputTranscription: "",
      });
    } else {
      this.setState({
        emptyInputTranscription: true,
        colorOfInputTranscription: "red",
      });
    }
    if (result.test(value)) {
      this.setState({
        errorInInput: true,
        colorOfInputTranscription: "red",
      });
    } else {
      this.setState({
        errorInInput: false,
      });
    }
  };

  blurHandlerRussian = (e) => {
    const value = e.target.value;
    const result = /[^a-z]/gi;
    const emptyInput = "";

    if (emptyInput !== value) {
      this.setState({
        emptyInputRussian: false,
        colorOfInputRussian: "",
      });
    } else {
      this.setState({
        emptyInputRussian: true,
        colorOfInputRussian: "red",
      });
    }
    if (result.test(value)) {
      this.setState({
        errorInInput: true,
        colorOfInputRussian: "red",
      });
    } else {
      this.setState({
        errorInInput: false,
      });
    }
  };

  render() {
    const error = "Значение может включать только буквы";
    const errorInInput = this.state.errorInInput;
    const emptyInputRussian = this.state.emptyInputRussian;
    const emptyInputTranscription = this.state.emptyInputTranscription;
    const emptyInputPortuguese = this.state.emptyInputPortuguese;
    const empty = "Нужно заполнить все поля";
    const { id, portuguese, transcription, russian } = this.props;
    const color = "red";

    let portugueseInput = (
      <input
        type="text"
        placeholder={portuguese}
        name="portuguese"
        onChange={this.handleInputChange}
        onBlur={this.blurHandlerPortuguese}
        value={this.state.portuguese}
        style={{ borderColor: this.state.colorOfInputPortuguese }}
      />
    );
    let transcriptionInput = (
      <input
        placeholder={transcription}
        name="transcription"
        onChange={this.handleInputChange}
        onBlur={this.blurHandlerTranscription}
        value={this.state.transcription}
        style={{ borderColor: this.state.colorOfInputTranscription }}
      />
    );
    let russianInput = (
      <input
        placeholder={russian}
        name="russian"
        onChange={this.handleInputChange}
        onBlur={this.blurHandlerRussian}
        value={this.state.russian}
        style={{ borderColor: this.state.colorOfInputRussian }}
      />
    );

    return (
      <>
        <tr key={id}>
          {this.state.clicked ? (
            <>
              <td className={tableStyles.tdWords}>{portugueseInput}</td>
              <td className={tableStyles.tdWords}>{transcriptionInput}</td>
              <td className={tableStyles.tdWords}>{russianInput}</td>

              <td className={tableStyles.tdWords}>
                <button
                  onClick={this.handleChange}
                  className={tableStyles.tableButton}
                  disabled={
                    (emptyInputRussian ||
                      emptyInputTranscription ||
                      emptyInputPortuguese ||
                      errorInInput) &&
                    true
                  }
                >
                  Сохранить
                </button>
                <button
                  onClick={this.handleChange}
                  className={tableStyles.tableButton}
                >
                  Удалить
                </button>
              </td>
            </>
          ) : (
            <>
              <td className={tableStyles.tdWords}>{portuguese}</td>
              <td className={tableStyles.tdWords}>{transcription}</td>
              <td className={tableStyles.tdWords}>{russian}</td>
              <td className={tableStyles.tdWords}>
                <button
                  onClick={this.handleChange}
                  className={tableStyles.tableButton}
                >
                  Редактировать
                </button>
              </td>
            </>
          )}
        </tr>
        <tr>
          <td>
            {(emptyInputRussian ||
              emptyInputTranscription ||
              emptyInputPortuguese) && (
              <div style={{ color: color }}>{empty}</div>
            )}
            {errorInInput && <div style={{ color: color }}>{error}</div>}
          </td>
        </tr>
      </>
    );
  }
}
