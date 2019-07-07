import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

class Nav extends React.Component {

  render() {
    return <div className="navBox">
      <Link to="/film" className="navLinks">DOCUMENTARY FILM</Link>
      <Link to="/commercial" className="navLinks">COMMERCIAL & BRANDED</Link>
    </div>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Nav;
