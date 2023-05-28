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
      borderColorPortuguese: "",
      borderColorTranscription: "",
      borderColorRussian: "",
      color: "",
    };
  }
  handleChange = () => {
    this.setState({
      clicked: !this.state.clicked,
      emptyInputRussian: true,
      emptyInputTranscription: true,
      emptyInputPortuguese: true,
      borderColorPortuguese: "red",
      borderColorTranscription: "red",
      borderColorRussian: "red",
      color: "red",
    });
  };
  handleCansel = () => {
    this.setState({
      clicked: !this.state.clicked,
      emptyInputRussian: false,
      emptyInputTranscription: false,
      emptyInputPortuguese: false,
      errorInInput: false,
    });
  };
  handleSave = () => {
    this.setState(
      {
        clicked: !this.state.clicked,
        emptyInputRussian: false,
        emptyInputTranscription: false,
        emptyInputPortuguese: false,
        errorInInput: false,
      },
      this.doItLater
    );
  };
  doItLater = () => {
    console.log(this.state.portuguese);
    console.log(this.state.transcription);
    console.log(this.state.russian);
  };
  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  blurHandlerChangePortuguese = (e) => {
    const value = e.target.value;
    const validation = /[^a-zа-яё ]/iu;
    const emptyInput = "";
    if (validation.test(value)) {
      this.setState({
        errorInInput: true,
      });
    } else {
      this.setState({
        errorInInput: false,
        borderColorPortuguese: "black",
      });
    }
    if (emptyInput === value) {
      this.setState({
        emptyInputPortuguese: true,
      });
    } else {
      this.setState({
        emptyInputPortuguese: false,
      });
    }
  };
  blurHandlerChangeTranscription = (e) => {
    const value = e.target.value;
    const validation = /[^a-zа-яё ]/iu;
    const emptyInput = "";
    if (validation.test(value)) {
      this.setState({
        errorInInput: true,
      });
    } else {
      this.setState({
        errorInInput: false,
        borderColorTranscription: "black",
      });
    }
    if (emptyInput === value) {
      this.setState({
        emptyInputTranscription: true,
      });
    } else {
      this.setState({
        emptyInputTranscription: false,
      });
    }
  };
  blurHandlerChangeRussian = (e) => {
    const value = e.target.value;
    const validation = /[^a-zа-яё ]/iu;
    const emptyInput = "";
    if (validation.test(value)) {
      this.setState({
        errorInInput: true,
      });
    } else {
      this.setState({
        errorInInput: false,
        borderColorRussian: "black",
      });
    }
    if (emptyInput === value) {
      this.setState({
        emptyInputRussian: true,
      });
    } else {
      this.setState({
        emptyInputRussian: false,
      });
    }
  };

  render() {
    const error = "Значение может включать только буквы";
    const empty = "Нужно заполнить все поля";

    const {
      errorInInput,
      emptyInputPortuguese,
      emptyInputTranscription,
      emptyInputRussian,
    } = this.state;
    const { id, portuguese, transcription, russian } = this.props;

    let portugueseInput = (
      <input
        type="text"
        placeholder={portuguese}
        name="portuguese"
        onChange={this.handleInputChange}
        onBlur={this.blurHandlerChangePortuguese}
        value={this.state.portuguese}
        style={{ borderColor: this.state.borderColorPortuguese }}
      />
    );
    let transcriptionInput = (
      <input
        placeholder={transcription}
        name="transcription"
        onChange={this.handleInputChange}
        onBlur={this.blurHandlerChangeTranscription}
        value={this.state.transcription}
        style={{ borderColor: this.state.borderColorTranscription }}
      />
    );
    let russianInput = (
      <input
        placeholder={russian}
        name="russian"
        onChange={this.handleInputChange}
        onBlur={this.blurHandlerChangeRussian}
        value={this.state.russian}
        style={{ borderColor: this.state.borderColorRussian }}
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
                  onClick={this.handleSave}
                  className={tableStyles.tableButton}
                  disabled={
                    (emptyInputPortuguese ||
                      emptyInputTranscription ||
                      emptyInputRussian ||
                      errorInInput) &&
                    true
                  }
                >
                  Сохранить
                </button>
                <button
                  onClick={this.handleCansel}
                  className={tableStyles.tableButton}
                >
                  Отмена
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
                <button
                  onClick={this.handleDelite}
                  className={tableStyles.tableButton}
                >
                  Удалить слово
                </button>
              </td>
            </>
          )}
        </tr>
        <tr>
          <td>
            {(emptyInputPortuguese ||
              emptyInputTranscription ||
              emptyInputRussian) && (
              <div style={{ color: this.state.color }}>{empty}</div>
            )}
            {errorInInput && (
              <div style={{ color: this.state.color }}>{error}</div>
            )}
          </td>
        </tr>
      </>
    );
  }
}
