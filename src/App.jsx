import "./reset.css";
import "./App.css";
import Header from "./components/Header.jsx";
import Barra from "./components/Barra.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="df fdc container">
        <Barra />
        <div>section 2</div>
      </div>
    </>
  );
}

export default App;
