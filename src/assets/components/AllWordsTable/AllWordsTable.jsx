import React from "react";
import { listOfWords } from "../../data/Data";
import "./allWordsTable.css";

export default class Table extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Португальский</td>
            <td>Транскрипция</td>
            <td>Перевод</td>
            <td>Действие</td>
          </tr>
        </thead>
        <tbody>
          {listOfWords.map(function (item) {
            return (
              <tr key={item.id}>
                <td>{item.portuguese}</td>
                <td>{item.transcription}</td>
                <td>{item.russian}</td>
                <td>
                  <button></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
