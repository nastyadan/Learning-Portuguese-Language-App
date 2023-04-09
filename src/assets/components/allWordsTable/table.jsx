import React from "react";
import { listOfWords } from "../../data/Data.js";
import tableStyles from "./AllWordsTable.module.scss";
import Row2 from "./string/row2.jsx";

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
            return (
              <Row2
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
