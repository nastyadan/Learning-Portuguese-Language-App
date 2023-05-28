import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApiContext } from "./assets/components/apiContext/ApiContext";
import Header from "./assets/components/header/Header.jsx";
import AllWordsTable from "./assets/components/allWordsTable/AllWordsTable.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
import Slider from "./assets/components/cardSlider/CardSlider";
import { listOfWords } from "./assets/data/Data.js";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Что-то пошло не так(");
        }
      })
      .then((response) => {
        this.setState({
          words: response,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  render() {
    const { words, isLoading, error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>Идёт загрузка ...</p>;
    }
    return (
      <ApiContext.Provider value={this.words}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <ol>
              {words.map((word) => {
                return (
                  <li key={word.id}>
                    {word.english} - {word.russian}
                  </li>
                );
              })}
            </ol>
            <main>
              <Routes>
                <Route path="/cards" element={<Slider {...this.words} />} />
                <Route
                  path="/table"
                  element={
                    <AllWordsTable
                      couldbechanged={listOfWords.map(
                        (couldbechanged) => couldbechanged
                      )}
                    />
                  }
                />
                <Route
                  exact
                  path="/"
                  element={
                    <AllWordsTable
                      couldbechanged={listOfWords.map(
                        (couldbechanged) => couldbechanged
                      )}
                    />
                  }
                />
                <Route path="*" element="Ошибка 404: Страница не найдена" />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </ApiContext.Provider>
    );
  }
}

export default App;
