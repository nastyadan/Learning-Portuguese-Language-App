import React from "react";
import { listOfWords } from "../../data/Data.js";
import tableStyles from "./allWordsTable.module.scss";

export default class Table extends React.Component {
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
          {listOfWords.map(function (item) {
            return (
              <tr key={item.id}>
                <td className={tableStyles.tdWords}>{item.portuguese}</td>
                <td className={tableStyles.tdWords}>{item.transcription}</td>
                <td className={tableStyles.tdWords}>{item.russian}</td>
                <td className={tableStyles.tdWords}>
                  <button className={tableStyles.tableButton}>
                    Редактировать
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
