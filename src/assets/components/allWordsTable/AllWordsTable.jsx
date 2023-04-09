import React from "react";
import { listOfWords } from "../../data/Data.js";
import tableStyles from "./AllWordsTable.module.scss";
function NotAbleToChange(item) {
  return (
    <tbody>
      {listOfWords.map(function (item) {
        return (
          <tr key={item.id}>
            <td className={tableStyles.tdWords}>{item.portuguese}</td>
            <td className={tableStyles.tdWords}>{item.transcription}</td>
            <td className={tableStyles.tdWords}>{item.russian}</td>
            <td className={tableStyles.tdWords}>
              <button className={tableStyles.tableButton}>Редактировать</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
function AbleToChange(props) {
  return (
    <tbody>
      {listOfWords.map(function (item) {
        let portuguese = <input placeholder={item.portuguese} />;
        let transcription = <input placeholder={item.transcription} />;
        let russian = <input placeholder={item.russian} />;
        return (
          <tr key={item.id}>
            <td className={tableStyles.tdWords}>{portuguese}</td>
            <td className={tableStyles.tdWords}>{transcription}</td>
            <td className={tableStyles.tdWords}>{russian}</td>
            <td className={tableStyles.tdWords}>
              <button className={tableStyles.tableButton}>Сохранить</button>
              <button className={tableStyles.tableButton}>Удалить</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  handleChange = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    const { couldbechanged } = this.props;
    return (
      <table className={tableStyles.table} onClick={this.handleChange}>
        <thead>
          <tr>
            <td className={tableStyles.tdName}>Португальский</td>
            <td className={tableStyles.tdName}>Транскрипция</td>
            <td className={tableStyles.tdName}>Перевод</td>
            <td className={tableStyles.tdName}>Действие</td>
          </tr>
        </thead>

        {this.state.clicked ? (
          <AbleToChange couldBeChanged={couldbechanged} />
        ) : (
          <NotAbleToChange couldBeChanged={couldbechanged} />
        )}
      </table>
    );
  }
}
<tbody>
  {listOfWords.map((item) => {
    let portugueseInput = <input placeholder={item.portuguese} />;
    let transcriptionInput = <input placeholder={item.transcription} />;
    let russianInput = <input placeholder={item.russian} />;
    return (
      <tr key={item.id}>
        {this.state.clicked ? (
          <>
            <td className={tableStyles.tdWords}>{item.portuguese}</td>
            <td className={tableStyles.tdWords}>{item.transcription}</td>
            <td className={tableStyles.tdWords}>{item.russian}</td>
            <td className={tableStyles.tdWords}>
              <button
                onClick={this.handleChange}
                className={tableStyles.tableButton}
              >
                Редактировать
              </button>
            </td>
          </>
        ) : (
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
        )}
      </tr>
    );
  })}
</tbody>;
