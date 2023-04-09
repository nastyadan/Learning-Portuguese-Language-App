import React from "react";
import { listOfWords } from "../../../data/Data.js";
import tableStyles from "../AllWordsTable.module.scss";

export default class Row extends React.Component {
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
    return (
      <tbody>
        {listOfWords.map((item) => {
          return (
            <tr key={item.id}>
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
            </tr>
          );
        })}
      </tbody>
    );
  }
}
