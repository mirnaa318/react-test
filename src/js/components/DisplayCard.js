import React from 'react';
import { connect } from "react-redux";
import PathComp from './path';


class DisplayElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSelectedCard:'',
            fieldsList:[],
            theme:''
        };
      }

  render() {
    const {currentSelectedCard, fieldsList,theme}= this.props;
    return (
        <td>
        <table style={parentTable,{backgroundColor:theme.secondarySColor}}>
            <tr>
              <PathComp/>
              </tr>
              <tr>
          <table>
               <thead>
          </thead>
          <tbody>
          {fieldsList.map((field,index) => (
          <tr ><td>{field}</td> 
          <td className={(field=='Status' ) ?'statusElement':''}>{currentSelectedCard[field]}</td></tr>
          ))}
              </tbody>
          </table>
          </tr>
          </table>
          </td>
    )
  }
}
const parentTable={width:200};

const mapStateToProps = (state, ownProps) => {
    return {
        currentSelectedCard: state.currentSelectedCard,
        fieldsList:state.fieldsList,
        theme: state.theme
    }
  };

const displayElementComponent = connect(mapStateToProps)(DisplayElement);

export default displayElementComponent;