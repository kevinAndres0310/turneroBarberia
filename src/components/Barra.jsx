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

function Barra() {
  return (
    <div className="tabs-and-save-container">
      <div className="tabs-container">
        <div className="tab false df">
          <i className="icon">
            <FontAwesomeIcon icon={faChartColumn} />
          </i>
          <p className="p-tab"></p>
        </div>
        <div className="tab selected caja df">
          <i className="icon mr5">
            <FontAwesomeIcon icon={faCashRegister} />
          </i>
          <p>Caja</p>
        </div>
        <div className="tab false sucursales df">
          <i className="icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </i>
          <p></p>
        </div>
        <div className="tab false personal df">
          <i className="icon">
            <FontAwesomeIcon icon={faUserGroup} />
          </i>
          <p></p>
        </div>
        <div className="tab false servicios df">
          <i className="icon">
            <FontAwesomeIcon icon={faBellConcierge} />
          </i>
          <p></p>
        </div>
        <div className="tab false recursos df">
          <i className="icon">
            <FontAwesomeIcon icon={faSuitcase} />
          </i>
          <p></p>
        </div>
        <div className="tab false config df">
          <i className="icon">
            <FontAwesomeIcon icon={faGear} />
          </i>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Barra;
