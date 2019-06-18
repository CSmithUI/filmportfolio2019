import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Nav from '../nav/Nav'

class Header extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return <div className="header">
        <Link to="/" className="logo"><div className="logoName">Christopher Smith : editor</div></Link>
        <div className="navContainer"><Nav /></div>
        
    </div>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Header;
