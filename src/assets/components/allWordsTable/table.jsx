import React from "react";
import { listOfWords } from "../../data/Data.js";
import tableStyles from "./AllWordsTable.module.scss";

export default class Table extends React.Component {
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
    return (
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <td className={tableStyles.tdName}>Португальский</td>
            <td className={tableStyles.tdName}>Транскрипция</td>
            <td className={tableStyles.tdName}>Перевод</td>
            <td className={tableStyles.tdName}>Действие</td>
          </tr>
        </thead>
        <tbody>
          {listOfWords.map((item) => {
            let portuguese = <input placeholder={item.portuguese} />;
            let transcription = <input placeholder={item.transcription} />;
            let russian = <input placeholder={item.russian} />;
            return (
              <tr key={item.id}>
                {this.state.clicked ? (
                  <>
                    <td className={tableStyles.tdWords}>{item.portuguese}</td>
                    <td className={tableStyles.tdWords}>
                      {item.transcription}
                    </td>
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
                    <td className={tableStyles.tdWords}>{portuguese}</td>
                    <td className={tableStyles.tdWords}>{transcription}</td>
                    <td className={tableStyles.tdWords}>{russian}</td>
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
        </tbody>
      </table>
    );
  }
}
