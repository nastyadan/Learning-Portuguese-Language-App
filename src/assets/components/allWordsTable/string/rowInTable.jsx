import React from "react";
import { listOfWords } from "../../../data/Data.js";
import tableStyles from "../AllWordsTable.module.scss";

export default class Row extends React.Component {
  render() {
    return (
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
    );
  }
}
