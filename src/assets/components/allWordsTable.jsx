import React from "react";

export default class Table extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>English</td>
            <td>Транскрипция</td>
            <td>Перевод</td>
            <td>Действие</td>
          </tr>
        </thead>
        <tbody>
          Здесь будет таблица из всех слов с возможностью удаления,
          редактирования и добавления новых слов
        </tbody>
      </table>
    );
  }
}
