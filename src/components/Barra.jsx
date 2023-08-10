import PropTypes from "prop-types";
import "./barra.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faCashRegister,
  faLocationDot,
  faUserGroup,
  faBellConcierge,
  faSuitcase,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function BarraSelected({ iconn, nombre, isSelected, onClick }) {
  return (
    <div
      className={`tab ${isSelected ? "selected" : "false"} df`}
      onClick={onClick}
    >
      <i>
        <FontAwesomeIcon icon={iconn} />
      </i>
      <p>{nombre}</p>
    </div>
  );
}

function Barra() {
  const [selectedButton, setSelectedButton] = useState("Informes");

  const hacerClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="tabs-and-save-container">
      <div className="tabs-container">
        <BarraSelected
          key={"informes"}
          iconn={faChartColumn}
          nombre="Informes"
          isSelected={selectedButton === "Informes"}
          onClick={() => hacerClick("Informes")}
        />
        <BarraSelected
          key={"caja"}
          iconn={faCashRegister}
          nombre="Caja"
          isSelected={selectedButton === "Caja"}
          onClick={() => hacerClick("Caja")}
        />
        <BarraSelected
          key={"sucursales"}
          iconn={faLocationDot}
          nombre="Sucursales"
          isSelected={selectedButton === "Sucursales"}
          onClick={() => hacerClick("Sucursales")}
        />
        <BarraSelected
          key={"personal"}
          iconn={faUserGroup}
          nombre="Personal"
          isSelected={selectedButton === "Personal"}
          onClick={() => hacerClick("Personal")}
        />
        <BarraSelected
          key={"servicios"}
          iconn={faBellConcierge}
          nombre="Servicios"
          isSelected={selectedButton === "Servicios"}
          onClick={() => hacerClick("Servicios")}
        />
        <BarraSelected
          key={"recursos"}
          iconn={faSuitcase}
          nombre="Recursos"
          isSelected={selectedButton === "Recursos"}
          onClick={() => hacerClick("Recursos")}
        />
        <BarraSelected
          key={"configuracion"}
          iconn={faGear}
          nombre="Configuracion"
          isSelected={selectedButton === "Configuracion"}
          onClick={() => hacerClick("Configuracion")}
        />
      </div>
    </div>
  );
}

BarraSelected.propTypes = {
  iconn: PropTypes.object.isRequired,
  nombre: PropTypes.string.isRequired,
  clase: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Barra;
