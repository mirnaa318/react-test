import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import Card from './Card';
import {FaInfoCircle} from "@react-icons/all-files/fa/FaInfoCircle";
//import {AiOutlineArrowRight} from "@react-icons/ai/AiOutlineArrowRight"; 
import PathComp from './path';
import './styling.css'
import { updateCardSelected } from "../actions/index";


function mapDispatchToProps(dispatch) {
  return {
    updateCardSelected: card => dispatch(updateCardSelected(card)),
  };
}

class viewData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcontractor: "",ContractValue:"",REQdetail:'',
      trades:[],
      theme:'',
      selectedRow:'',
      fieldsList:[]
      
     
    };
      this.changeColor = this.changeColor.bind(this);
      this.selectCard = this.selectCard.bind(this);
  }

  changeColor = selectedRow => e => {
    if (selectedRow !== undefined) {
      this.setState({ selectedRow  });
    }
}
  selectCard(card) {
    this.props.updateCardSelected(card);
    //this.setState({ [event.target.id]: event.target.value });
  }

  

  render() {
    const {trades,theme, fieldsList}= this.props;
    return (
      <div style={{backgroundColor:theme.secondarySColor}}>
        <table>
          <tr>
         <PathComp/>
         </tr>
         <tr>
      <table className="borderbottom" style={tableStyle}>
          <thead>
          </thead>
          <tr>
              <td></td>
              {fieldsList.map((field,index) => (
          <td>{field}</td>
          ))}
          </tr >

          <tbody className="tableHover">
      {trades.map((el,index) => (
          <tr key={index} onClick={this.changeColor(index)} className={this.state.selectedRow === index ? "tableSelected" : ""}>
                  <td > <NavLink hidden={this.state.selectedRow !== index} to={{ pathname:"/Card" ,aboutProps:{  ...el}}}
         id="NavLink" value={el} ><FaInfoCircle hidden={this.state.selectedRow !== index}/></NavLink></td>
         {fieldsList.map((field,index) => (
          <td>{el[field]}</td>
          ))}
              {/* <td>Info  <NavLink to="/displayElement"
         id="NavLink" value={el} onClick={() =>this.selectCard(el)}>Info</NavLink></td> */}
        </tr>
      ))}
      </tbody>
      
    </table><br/>
    </tr>
    </table>
    </div>
    );
  }
}

const tableStyle = {borderWidth:1}
const mapStateToProps = (state, ownProps) => {
  return {
      trades: state.trades,
      theme: state.theme,
      rowClicked: state.theme,
      fieldsList:state.fieldsList
  }
};

const viewDataComp = connect(mapStateToProps,mapDispatchToProps)(viewData);

// Form = connect(
//   null,
//   mapDispatchToProps
// )(ConnectedForm);

export default viewDataComp;