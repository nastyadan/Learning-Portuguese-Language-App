import "./App.css";

import Header from "./assets/components/header";
import Table from "./assets/components/allWordsTable";
import Footer from "./assets/components/footer";
import Card from "./assets/components/card";

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
