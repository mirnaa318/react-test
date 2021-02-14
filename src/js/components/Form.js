import React, { Component } from "react";
import { connect } from "react-redux";
import { GET_Articles } from "../actions/index";
import { NavLink } from 'react-router-dom';
import { RiMenuLine } from "@react-icons/all-files/ri/RiMenuLine";
import {RiFunctionFill} from "@react-icons/all-files/ri/RiFunctionFill";

//import {AiOutlineArrowRight} from "@react-icons/ai/AiOutlineArrowRight"; 
import PathComp from './path';
import AddElementComponent from './AddElement';
import Card from './Card';
import './styling.css'
import { addArticle } from "../actions/index";


function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trades:[],
      theme:'',
      fieldsList:[]
    }
    this.updateTrades = this.updateTrades.bind(this);
     
  }

  updateTrades(element) {
    this.props.addArticle(element);
    this.setState({modalIsOpen: false});
    this.setState({ subcontractor: '',TradeName:'', ContractValue:'',Status:'',Contract:'',Company:''});
  }

  render() {
    const {trades,theme}= this.props;
    return (
      <div style={{backgroundColor:theme.secondarySColor}}>
         <PathComp/>
        <table  >
          <tbody >
            <tr >
              <td  className="pullRight">
                <table>
                  <tr><td>
                <input value="Search"/></td>
              <td><label >Project Name </label></td>
               <td><label >Nickname </label></td>
               <td> <label>SubProject</label></td>
                <td><AddElementComponent onFormSubmit={this.updateTrades}/></td>
                <td><RiFunctionFill/></td>
                <td><NavLink to="/viewData"> <RiMenuLine /></NavLink>
                </td>
                </tr>
                </table>
                </td>
          </tr>
         <tr>
          <div className="content">
          <div className="grid"></div>
          
     {trades.map((trade,index) => 
       <Card key={index}  {...trade} />
       )}
      </div>
      </tr>
      <br/>    
      </tbody>
          </table>
    </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
      trades: state.trades,
      theme: state.theme,
      fieldsList:state.fieldsList
  }
};

const Form = connect(mapStateToProps,mapDispatchToProps)(ConnectedForm);

// Form = connect(
//   null,
//   mapDispatchToProps
// )(ConnectedForm);

export default Form;