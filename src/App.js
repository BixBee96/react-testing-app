import "./App.css";
import Footer from "./components/footer/Footer";
import MainContent from "./components/main/Main";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
