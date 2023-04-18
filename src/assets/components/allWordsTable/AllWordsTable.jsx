import React from "react";
import { listOfWords } from "../../data/Data.js";
import tableStyles from "./AllWordsTable.module.scss";
import Row from "./row/RowInTable.jsx"

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
          {listOfWords.map((item) => {
            return (
              <Row
                couldbechanged={item.couldbechanged}
                key={item.id}
                portuguese={item.portuguese}
                transcription={item.transcription}
                russian={item.russian}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
