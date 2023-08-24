import "./Header.css";

function Header() {
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
                  <i className="fa-regular fa-calendar letra"></i>
                </div>
              </div>

              <div className="df fdc">
                <h1 className="titulo letra">Turnero</h1>
                <small className="frase letra">
                  tu tiempo, nuestra prioridad
                </small>
              </div>
            </div>

            <div className="cuenta-google">
              <h2 className="letra">imagen</h2>
            </div>
          </div>
        </div>

        <div className="df jcc posa aic absolute">
          <h2 className="subtitulo letra">Mi empresa</h2>
        </div>
      </header>
    </>
  );
}

export default Header;
