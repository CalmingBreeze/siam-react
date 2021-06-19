import {FormattedMessage} from 'react-intl';

import ElephantIcon from '../assets/img/elephant.png';
import MountainIcon from '../assets/img/mountain.png';
import RhinocerosIcon from '../assets/img/rhinoceros.png';

function Navbar(props) {
  console.log(props.appData);
  return (
    <nav id="navBar">
      <div id="logo">
        <div className="picture">
          <img className="team" src={ElephantIcon} alt="" />
          <img className="goal" src={MountainIcon} alt="" />
          <img className="team" src={RhinocerosIcon} alt="" />
        </div>
        <div className="title">
          <label className="gameName">{props.appData.title}</label>
          <label className="version">{props.appData.version}</label>
        </div>
      </div>
      <div id="siamGameActions">
        <button type="button"><FormattedMessage id="nav-home" /></button>
        <button type="button"><FormattedMessage id="nav-newgame" /></button>
      </div>
    </nav>
  );
}

export default Navbar;
