import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Nav from '../nav/Nav'

class Header extends React.Component {


  render() {
    return <div className="header">
      <Link to="/" className="logo"><div className="logoName">CHRISTOPHER SMITH <span className="logoTagline">producer / director / editor</span></div></Link>
      <div className="navContainer"><Nav /></div>

    </div>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Header;
