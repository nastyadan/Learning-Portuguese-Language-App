import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApiContext } from "./assets/components/apiContext/ApiContext";
import Header from "./assets/components/header/Header.jsx";
import AllWordsTable from "./assets/components/allWordsTable/AllWordsTable.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
import Slider from "./assets/components/cardSlider/CardSlider";
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
    this.getWordsFromAPI();
  }

  getWordsFromAPI() {
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
      <ApiContext.Provider value={words}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/cards" element={<Slider />} />
                <Route path="/table" element={<AllWordsTable />} />
                <Route exact path="/" element={<AllWordsTable />} />
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
