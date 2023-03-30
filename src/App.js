import "./App.css";
import Header from "./assets/components/header/Header.jsx";
import Table from "./assets/components/allWordsTable/AllWordsTable.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
import Card from "./assets/components/card/Card.jsx";
import { listOfWords } from "./assets/data/Data.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Table></Table>
      {listOfWords.map((listOfWords) => (
        <Card
          portuguese={listOfWords.portuguese}
          transcription={listOfWords.transcription}
          russian={listOfWords.russian}
          key={listOfWords.id}
        ></Card>
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
