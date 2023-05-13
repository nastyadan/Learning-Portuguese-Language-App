import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/components/header/Header.jsx";
//import headerStyles from "./assets/components/header/Header.module.scss";
import AllWordsTable from "./assets/components/allWordsTable/AllWordsTable.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
//import footerStyles from "./assets/components/footer/Footer.module.scss";
import Slider from "./assets/components/cardSlider/CardSlider";
import { listOfWords } from "./assets/data/Data.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/cards" element={<Slider {...listOfWords} />} />
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
  );
}

export default App;
