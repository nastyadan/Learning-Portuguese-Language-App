import React from "react";
import tableStyles from "../AllWordsTable.module.scss";
export default class Row extends React.Component {
  constructor(props) {
    super(props);
    let couldbechanged = props.couldbechanged;
    this.state = {
      clicked: couldbechanged,
    };
  }
  handleChange = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    const { id, portuguese, transcription, russian } = this.props;
    let portugueseInput = <input placeholder={portuguese} />;
    let transcriptionInput = <input placeholder={transcription} />;
    let russianInput = <input placeholder={russian} />;
    return (
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
    );
  }
}
