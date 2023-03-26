import "./App.css";
import Header from "./assets/components/header/Header";
import Table from "./assets/components/allWordsTable/AllWordsTable";
import Footer from "./assets/components/footer/Footer";
import Card from "./assets/components/card/Card";
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
