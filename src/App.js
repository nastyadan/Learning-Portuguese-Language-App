import "./App.css";

import Header from "./assets/components/header/Header";
import Table from "./assets/components/allWordsTable/AllWordsTable";
import Footer from "./assets/components/footer/Footer";
import Card from "./assets/components/card/Card";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Table></Table>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
