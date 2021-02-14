import React, { Component } from "react";
import { RiAddFill } from "@react-icons/all-files/ri/RiAddFill";
import Modal from 'react-modal';
import './styling.css'


const customStyles = {
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class AddElementComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        subcontractor: "",
        TradeName:'',
        ContractValue:'',
        Status:'',
        Contract:'',
        Company:'',
        trades:[],
        modalIsOpen: false,
        fieldsList:[]
      };

      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
      Modal.setAppElement('body');
    }

    openModal() {
      this.setState({modalIsOpen: true});
    }
  
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }
  
    closeModal() {
      this.setState({modalIsOpen: false});
    }

    handleChange(event) {
      console.log(event.target.value)
        this.setState({ [event.target.id]: event.target.value });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit({'subcontractor': this.state.subcontractor,'TradeName':this.state.TradeName,'ContractValue':this.state.ContractValue,'Status':this.state.Status,'Contract':this.state.Contract,
       'Company':this.state.Company });
        this.setState({modalIsOpen: false});
        this.setState({ subcontractor: '',TradeName:'', ContractValue:'',Status:'',Contract:'',Company:''});
      }

    render() {
        return (
          <div>
          <button onClick={this.openModal}><RiAddFill /> Add New</button>
          <Modal
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <form style={{paddingLeft:50}} onSubmit={this.handleSubmit}>
              <table>
                <tr>
                  <td>
                     <label htmlFor="title">SubContractor </label></td>
                     <td className="paddingLeft">
              <input
                type="text"
                id="subcontractor"
                required
                value={this.state.subcontractor}
                onChange={this.handleChange} />
                <br/>
                </td>
                </tr>
                <tr>
                  <td><label htmlFor="title">Contract Value </label></td>
                  <td className="paddingLeft">
              <input
                type="text"
                id="ContractValue"
                required
                value={this.state.ContractValue}
                onChange={this.handleChange}/></td>
                </tr>
                <tr>
                  <td><label htmlFor="title">Trade Name </label></td>
                  <td className="paddingLeft">
              <input
                type="text"
                id="TradeName"
                required
                value={this.state.TradeName}
                onChange={this.handleChange}/></td>
                </tr>
                 <tr>
                   <td> <label htmlFor="title">Status </label></td>
                   <td className="paddingLeft">
              <input
                type="text"
                id="Status"
                required
                value={this.state.Status}
                onChange={this.handleChange}/> <br/></td>
              </tr>
              <tr>
                   <td> <label htmlFor="title">Contract </label></td>
                   <td className="paddingLeft">
              <input
                type="text"
                id="Contract"
                required
                value={this.state.Contract}
                onChange={this.handleChange}/> <br/></td>
              </tr>
              <tr>
                   <td> <label htmlFor="title">Company </label></td>
                   <td className="paddingLeft">
              <input
                type="text"
                id="Company"
                value={this.state.Company}
                onChange={this.handleChange} required/>  <br/></td>
              </tr>
              </table>
            <br/>
            <button onClick={this.handleSubmit} type="submit">Save</button>
            <button onClick={this.closeModal}>close</button>
          </form>
          </Modal>
          </div>
        );
        }
        }
    

        // const mapStateToProps = (state, ownProps) => {
        //   return {
        //       fieldsList:state.fieldsList
        //   }
        // };
    export default AddElementComponent;


    
// const styles = StyleSheet.create({
//     projectButtons: {
//         marginTop: 20,
//         height: 46,
//         overflow: 'hidden',
//         borderRadius: 23,
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
// })