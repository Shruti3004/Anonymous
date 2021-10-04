import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Features from "./components/Features";
import Leadership from "./components/Leadership";
import Footer from "./components/Footer";
import Join from "./components/Join";
import Roadmap from "./components/Roadmap";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Body />
      <Join />
      <Roadmap />
      <Leadership />
      <Footer />
    </div>
  );
}

export default App;
