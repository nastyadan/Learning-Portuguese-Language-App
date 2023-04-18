import "./App.css";
import Header from "./assets/components/header/Header.jsx";
import AllWordsTable from "./assets/components/allWordsTable/AllWordsTable.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
import Card from "./assets/components/card/Card.jsx";
import Slider from "./assets/components/slider/Slider";
import { listOfWords } from "./assets/data/Data.js";

function App() {
  return (
    <div className="App">
      <Header />

      <Slider />

      <AllWordsTable
        couldbechanged={listOfWords.map((couldbechanged) => couldbechanged)}
      />
      {listOfWords.map((listOfWords) => (
        <Card
          portuguese={listOfWords.portuguese}
          transcription={listOfWords.transcription}
          russian={listOfWords.russian}
          key={listOfWords.id}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
