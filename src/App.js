import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import Header from "./assets/components/header/Header.jsx";
import headerStyles from "./assets/components/header/Header.module.scss";
import AllWordsTable from "./assets/components/allWordsTable/AllWordsTable.jsx";
//import Footer from "./assets/components/footer/Footer.jsx";
import footerStyles from "./assets/components/footer/Footer.module.scss";
import Slider from "./assets/components/cardSlider/CardSlider";
import { listOfWords } from "./assets/data/Data.js";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className={headerStyles.header}>
            <nav className={headerStyles.nav}>
              <Link to="/">
                <button className={headerStyles.buttonInNav}>На главную</button>
              </Link>
              <Link to="/table">
                <button className={headerStyles.buttonInNav}>
                  Список слов
                </button>
              </Link>
              <Link to="/cards">
                <button className={headerStyles.buttonInNav}>
                  Смотреть карточки
                </button>
              </Link>
            </nav>
          </div>
        </header>
        <main>
          <Routes>
            <Route
              path="/cards"
              element={
                <Slider
                  portuguese={listOfWords.portuguese}
                  transcription={listOfWords.transcription}
                  russian={listOfWords.russian}
                  key={listOfWords.id}
                />
              }
            />
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
        <footer>
          <div className={footerStyles.footer}>
            <nav className={footerStyles.nav}>
              <Link to="/">
                <button className={footerStyles.buttonInNav}>На главную</button>
              </Link>
              <Link to="/table">
                <button className={footerStyles.buttonInNav}>
                  Список слов
                </button>
              </Link>
              <Link to="/cards">
                <button className={footerStyles.buttonInNav}>
                  Смотреть карточки
                </button>
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
