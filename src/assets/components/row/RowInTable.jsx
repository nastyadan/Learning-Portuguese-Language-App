import React from "react";
import tableStyles from "../allWordsTable/AllWordsTable.module.scss";

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      couldbechanged: false,
      english: "",
      transcription: "",
      russian: "",
      errorInInput: false,
      emptyInputRussian: false,
      emptyInputTranscription: false,
      emptyInputenglish: false,
      colorOfInputRussian: "",
      colorOfInputTranscription: "",
      colorOfInputenglish: "",
      borderColorenglish: "",
      borderColorTranscription: "",
      borderColorRussian: "",
      color: "",
    };
  }

  handleChange = () => {
    this.setState({
      couldbechanged: true,
      emptyInputRussian: true,
      emptyInputTranscription: true,
      emptyInputenglish: true,
      borderColorenglish: "red",
      borderColorTranscription: "red",
      borderColorRussian: "red",
      color: "red",
    });
  };
  handleCansel = () => {
    this.setState({
      couldbechanged: false,
      emptyInputRussian: false,
      emptyInputTranscription: false,
      emptyInputenglish: false,
      errorInInput: false,
    });
  };
  handleSave = () => {
    this.setState({
      couldbechanged: false,
      emptyInputRussian: false,
      emptyInputTranscription: false,
      emptyInputenglish: false,
      errorInInput: false,
    });
    this.props.saveUpdateWord();
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    console.log(value);
  };

  blurHandlerChangeenglish = (e) => {
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
        borderColorenglish: "black",
      });
    }
    if (emptyInput === value) {
      this.setState({
        emptyInputenglish: true,
      });
    } else {
      this.setState({
        emptyInputenglish: false,
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
      emptyInputenglish,
      emptyInputTranscription,
      emptyInputRussian,
    } = this.state;
    const { id, english, transcription, russian } = this.props;

    let englishInput = (
      <input
        type="text"
        placeholder={english}
        name="english"
        onChange={this.handleInputChange}
        onBlur={this.blurHandlerChangeenglish}
        value={this.state.english}
        style={{ borderColor: this.state.borderColorenglish }}
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
          {this.state.couldbechanged ? (
            <>
              <td className={tableStyles.tdWords}>{englishInput}</td>
              <td className={tableStyles.tdWords}>{transcriptionInput}</td>
              <td className={tableStyles.tdWords}>{russianInput}</td>

              <td className={tableStyles.tdWords}>
                <button
                  onClick={this.handleSave}
                  className={tableStyles.tableButton}
                  disabled={
                    (emptyInputenglish ||
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
              <td className={tableStyles.tdWords}>{english}</td>
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
            {(emptyInputenglish ||
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
