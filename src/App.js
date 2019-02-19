import React, { Component } from 'react';
import ShippingLabelMaker from './features/shipping-label-maker/ShippingLabelMaker';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShippingLabelMaker />
      </div>
    );
  }
}

export default App;
