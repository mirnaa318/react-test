import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {FiHome} from "@react-icons/all-files/fi/FiHome";
import {FiArchive} from "@react-icons/all-files/fi/FiArchive";
import {AiFillSetting} from "@react-icons/all-files/ai/AiFillSetting";
import { NavLink } from 'react-router-dom';
//import {AiOutlineArrowRight} from "@react-icons/ai/AiOutlineArrowRight"; 
import './styling.css'


class LeftNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcontractor: "",ContractValue:"",REQdetail:'',
      trades:[],
      theme:''
    };
  }

  render() {
    const {theme}= this.props;
    return (
      <div >
        <Navbar default collapseOnSelect>
        <Navbar.Collapse>
        <Nav>
        <NavItem >
        <NavLink to="/viewData"> <FiHome /></NavLink>
            </NavItem>
            <NavItem >
           <FiArchive />
            </NavItem>
            <NavItem >
           <AiFillSetting />
            </NavItem>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      theme: state.theme
  }
};

const LeftNavBarComp = connect(mapStateToProps)(LeftNavBar);

// Form = connect(
//   null,
//   mapDispatchToProps
// )(ConnectedForm);

export default LeftNavBarComp;