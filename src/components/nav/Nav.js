import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'


class Nav extends React.Component {

  render() {
    return <div className="navBox">
      <NavLink to="/film" className="navLinks" activeClassName="navLinkCurrent">DOCUMENTARY FILM</NavLink>
      <NavLink to="/commercial" className="navLinks" activeClassName="navLinkCurrent">COMMERCIAL & BRANDED</NavLink>
    </div>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Nav;
