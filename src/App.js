import "./App.css";

import Header from "./assets/components/Header/Header";
import Table from "./assets/components/AllWordsTable/AllWordsTable";
import Footer from "./assets/components/Footer/Footer";
import Card from "./assets/components/Card/Card";

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
