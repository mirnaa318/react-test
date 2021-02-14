// src/js/components/App.js
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from "./Form";
import AddElement from "./AddElement";
import Card from "./Card";
import viewData from "./viewData";
import Navbar from './Customnavbar';
import LeftNavbar from './LeftNavBar';
import './styling.css'
const App = () => (
  <>
    <Router >
      <div>
              <Navbar />
            <Route exact path="/" component={Form} /> 
              <Route path="/AddElementComponent"  component={AddElement} />
          <Route path="/Card" component={Card} />
          <Route path="/viewData" component={viewData} />
        </div>
      </Router>
  </>
);

export default App;