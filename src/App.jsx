import "./reset.css";
import "./App.css";
import Header from "./components/Header.jsx";
import Barra from "./components/Barra.jsx";
import Informes from "./components/Informes";
import Caja from "./components/Caja";

function App() {
  return (
    <>
      <Header />
      <div className="df fdc container">
        <Barra />
        <div>
          <Informes />
          <Caja></Caja>
        </div>
      </div>
    </>
  );
}

export default App;
