import "./reset.css";
import "./App.css";

function App() {
  return (
    <>
      {/**
       * Esta es la cabezera de la pagina
       */}

      <header className="posr headerPrincipal">
        <div className="div-header">
          <div className="df contenedor-h1-icono">
            <div className="df">
              <div className="aic df jcc">
                <div className="icono">
                  <i className="fa-regular fa-calendar"></i>
                </div>
              </div>

              <div className="df fdc">
                <h1 className="titulo">Turnero</h1>
                <small className="frase">tu tiempo, nuestra prioridad</small>
              </div>
            </div>

            <div className="cuenta-google">
              <h2>imagen</h2>
            </div>
          </div>
        </div>

        <div className="df jcc posa aic absolute">
          <h2 className="subtitulo">Mi empresa</h2>
        </div>
      </header>
      {/**
       * Terminamos cabezera de la pagina
       * --------------------------------
       * Aqui empezamos el contenido del main o centro
       */}
      <div className="posr df jcc w100p">
        <div className="posa df fdc jcc aic w100p">
          <h2 className="empresa">Barbaro</h2>
        </div>
      </div>
    </>
  );
}

export default App;
