import "./App.css";
import Header from "./assets/components/header/Header.jsx";
import AllWordsTable from "./assets/components/allWordsTable/AllWordsTable.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
import Slider from "./assets/components/cardSlider/CardSlider";
import { listOfWords } from "./assets/data/Data.js";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header />

      <Slider
        portuguese={listOfWords.portuguese}
        transcription={listOfWords.transcription}
        russian={listOfWords.russian}
        key={listOfWords.id}
      />

      <AllWordsTable
        couldbechanged={listOfWords.map((couldbechanged) => couldbechanged)}
      />
      <Footer />
    </div>
  );
}

export default App;
