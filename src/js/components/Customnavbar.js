import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from "react-redux";
import './customNavbar.css'

class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: ''
    };
  }
  render() {
    const { theme } = this.props;
    return (
      <div className="grid" style={{ backgroundColor: theme.secondarySColor }}>
        <table  className="content">
          <tr>
            <td> <NavLink to="/">DASHBOARD</NavLink></td>
            <td><Link href="/">MASTER CONTRACT</Link></td>
            <td><Link href="/">COMPANIES</Link></td>
            <td><Link href="/">TRADES</Link></td>
            <td><Link href="/">CHANGE ORDER PLATFORM</Link></td>
          </tr>
        </table>
       
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  }
};

const CustomNavbarComponent = connect(mapStateToProps)(CustomNavbar);

export default CustomNavbarComponent;
