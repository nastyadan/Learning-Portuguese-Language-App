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
      //  errorInPortuguese: false,
      //   errorInTranscription: false,
      //  errorInRussian: false,
      // portugueseError: "",
      // transcriptionError: "",
      //russianError: "",
      errorInInput: false,
      emptyInput: false,
    };
  }
  handleChange = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
    console.log(this.state);
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

  blurHandler = (e) => {
    const value = e.target.value;
    const emptyInput = "";
    if (emptyInput !== value) {
      this.setState({
        emptyInput: false,
      });
    } else {
      this.setState({
        emptyInput: true,
      });
    }
  };

  render() {
    // const portugueseError = this.state.portugueseError;
    // const errorInPortuguese = this.state.portugueseDirty;
    // const transcriptionError = this.state.transcriptionError;
    // const errorInTranscription = this.state.transcriptionDirty;
    // const russianError = this.state.russianError;
    // const errorInRussian = this.state.russianDirty;
    const error = "Значение может включать только буквы";
    const errorInInput = this.state.errorInInput;
    const emptyInput = this.state.emptyInput;
    const empty = "Нужно заполнить все поля";
    const { id, portuguese, transcription, russian } = this.props;
    let portugueseInput = (
      <input
        type="text"
        placeholder={portuguese}
        name="portuguese"
        onChange={this.handleInputChange}
        onBlur={this.blurHandler}
        defaultValue={this.state.portuguese}
      />
    );
    let transcriptionInput = (
      <input
        placeholder={transcription}
        name="transcription"
        onChange={this.handleInputChange}
        onBlur={this.blurHandler}
        defaultValue={this.state.transcription}
      />
    );
    let russianInput = (
      <input
        placeholder={russian}
        name="russian"
        onChange={this.handleInputChange}
        onBlur={this.blurHandler}
        defaultValue={this.state.russian}
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
        {emptyInput && <div style={{ color: "red" }}>{empty}</div>}

        {errorInInput && <div style={{ color: "red" }}>{error}</div>}
      </>
    );
  }
}
