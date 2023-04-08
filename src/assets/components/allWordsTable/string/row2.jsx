import React from "react";
import { listOfWords } from "../../../data/Data.js";
import tableStyles from "../AllWordsTable.module.scss";
export default class Row2 extends React.Component {
  render() {
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
}
