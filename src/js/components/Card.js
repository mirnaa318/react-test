import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import tradeIMG from '../components/themes/Images/trade.png';
import './styling.css'
import {GiTimeTrap} from "@react-icons/all-files/gi/GiTimeTrap";
import { updateCardSelected } from "../actions/index";


function mapDispatchToProps(dispatch) {
  return {
    updateCardSelected: card => dispatch(updateCardSelected(card)),
  };
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.selectCard = this.selectCard.bind(this);
  }

  selectCard(card) {
    console.log(card)
    updateCardSelected(card);
    //this.setState({ [event.target.id]: event.target.value });
  }


  render() {
    const profile = this.props?this.props:this.props.location.aboutProps;
    return (
        <span className="pullLeft">
        <tr> <td><img style={{width: 380, height: 250}} src={tradeIMG}></img></td><td></td></tr>
         <tr> <td style={{paddingLeft:5}} className="statusElement"> {profile['Contract']}  <span className="pullRight"><GiTimeTrap/> {profile['Status']}</span> </td></tr>
        <tr><td >Trade Name  <span className="pullRight">{profile['TradeName']}</span></td></tr>
        <tr><td>Contract Value  <span className="pullRight">{profile['ContractValue']}</span></td></tr>
      
        <tr><td > <span >Company</span>  <span className="pullRight">{profile['Company']}</span></td></tr>
        
         </span>
    );
   
}
}

const Cardcomponent = connect(mapDispatchToProps)(Card);

export default Cardcomponent;