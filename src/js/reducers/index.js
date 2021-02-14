import { ADD_ARTICLE } from "../constants/action-types";
import {THEMES} from '../components/themes/themes';

var data=[
  {'subcontractor':'Admin','TradeName':'Admin','ContractValue':0.00,'Status':"Pre-construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'Admin','TradeName':'Mirna','ContractValue':100.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'Admin','TradeName':'Sam','ContractValue':150.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'Admin','TradeName':'Wiliam','ContractValue':150.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'Admin','TradeName':'Wiliam','ContractValue':150.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'User','TradeName':'Wiliam','ContractValue':150.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'User','TradeName':'Wiliam','ContractValue':150.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'Admin','TradeName':'Wiliam','ContractValue':150.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'Admin','TradeName':'Wiliam','ContractValue':150.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'Admin','TradeName':'Wiliam','ContractValue':150.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'User','TradeName':'Wiliam','ContractValue':150.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'User','TradeName':'Wiliam','ContractValue':150.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'Admin','TradeName':'Wiliam','ContractValue':150.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'User','TradeName':'Wiliam','ContractValue':150.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'Admin','TradeName':'Wiliam','ContractValue':150.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
{'subcontractor':'Admin','TradeName':'Wiliam','ContractValue':150.00,'Status':"Construction",'Contract':'Pre-Contract','Company':'STR'},
]

const initialState = {
  trades: data,
  currentSelectedCard: {},
  theme: THEMES[1],
  selectedRow:-1,
  modalIsOpen: false,
  fieldsList:['TradeName','ContractValue','Status','Contract','Company']
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    state.trades.push(action.payload)
    // return Object.assign({}, state, {
    //     trades: state.trades
    // });

    return {...state, trades :  state.trades}
  }

  if (action.type === "Select_Card") {
    return Object.assign({}, state, {
      currentSelectedCard: action.payload
    });
  }

  if (action.type === "GET_Articles") {
    return Object.assign({}, state, {
        trades: state.trades
    });
  }

  if (action.type === "Opened_Element") {
    return Object.assign({}, state, {
      currentOpenElementIdx: action.payload
    });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;