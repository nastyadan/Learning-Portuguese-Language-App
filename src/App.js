import "./App.css";

import Header from "./assets/components/Header";
import Table from "./assets/components/AllWordsTable";
import Footer from "./assets/components/Footer";
import Card from "./assets/components/Card";

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
