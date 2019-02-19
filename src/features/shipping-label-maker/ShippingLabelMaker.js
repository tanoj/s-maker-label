import React, { Component } from 'react';
import Wizard from '../../core/components/wizard/Wizard';
import ShippingLabel from './ShippingLabel';

import shippingObj from '../../helpers/shippingObj';

class ShippingLabelMaker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmShippment: false,
      shippindDetails: null,
    };
    
    this.shippmentConfirmed = this.shippmentConfirmed.bind(this);
  }

  shippmentConfirmed(shippindDetails) {
    this.setState({ confirmShippment: true, shippindDetails: shippindDetails });
  }
  
  render() {
    const { confirmShippment, shippindDetails } = this.state;
    return (
      <div>
         { confirmShippment ? <ShippingLabel shippingInfo={shippindDetails} /> :
          <Wizard
            wizardContext={shippingObj}
            onComplete={this.shippmentConfirmed}
          />
        }
      </div>
    );
  }
}


export default ShippingLabelMaker;