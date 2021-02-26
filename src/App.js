import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import "./App.css";
import MainContent from "./components/main/MainContent";

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
