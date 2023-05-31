import React from "react";
import tableStyles from "./AllWordsTable.module.scss";
import Row from "../row/RowInTable.jsx";
import { ApiContext } from "../apiContext/ApiContext.jsx";

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
          <ApiContext.Consumer>
            {(value) =>
              value.map((word) => {
                return <Row key={word.id} {...word} />;
              })
            }
          </ApiContext.Consumer>
        </tbody>
      </table>
    );
  }
}
