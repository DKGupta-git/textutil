import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom';
function Navbar(props){
    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.navmode} bg-${props.navmode}`}>
  <a className="navbar-brand" href="/" style={{cursor : 'pointer'}}>{props.logoheading}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="logonavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-a" href="/" style={{cursor : 'pointer'}}>Home <span className="sr-only">(current)</span></a>
      </li>

    </ul>

  </div>
 
<div className="custom-control custom-switch">
  <input type="checkbox" className="custom-control-input" id="customSwitches" mode={props.navmode} onClick={props.togglemode}/>
  <label className="custom-control-label" htmlFor="customSwitches" style= { props.navmode === 'light'?{color:'black'}:{color:'white'}}>Dark Mode {props.modeText} </label>
</div>
</nav>
        </>
    );
}

export default Navbar;
Navbar.propTypes = {
    logoheading: PropTypes.string
  }
  Navbar.defaultProps={
      logoheading: ' Please Add Logo'
  }

