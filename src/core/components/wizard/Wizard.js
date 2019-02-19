import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Progress  } from 'antd';
import StepOne from '../../../features/shipping-label-maker/steps/StepOne'
import StepTwo from '../../../features/shipping-label-maker/steps/StepTwo'
import StepThree from '../../../features/shipping-label-maker/steps/StepThree'
import StepFour from '../../../features/shipping-label-maker/steps/StepFour'
import StepFive from '../../../features/shipping-label-maker/steps/StepFive'


class Wizard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      wizardContext: props.wizardContext
    };
    
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.onFChangeromAddressHandler = this.onFChangeromAddressHandler.bind(this);
    this.onChangeToAddressHandler = this.onChangeToAddressHandler.bind(this);
    this.onChangeWeightHandler = this.onChangeWeightHandler.bind(this);
    this.onChangeShippingOptionHandler = this.onChangeShippingOptionHandler.bind(this);
    this._confirm = this._confirm.bind(this);
  }

  _next() {
    let currentStep = this.state.currentStep;
    if (currentStep >= 4) {
      currentStep = 5;
    } else {
      currentStep = currentStep + 1;
    }
    this.setState({
      currentStep: currentStep
    });
  }


  _prev() {
    let currentStep = this.state.currentStep;
    if (currentStep <= 1) {
        currentStep = 1;
      } else {
        currentStep = currentStep - 1;
    }
    this.setState({
      currentStep: currentStep
    });
  }

  onFChangeromAddressHandler(data) {
    this.setState({ wizardContext: { ...this.state.wizardContext, from: data} });
  }
  
  onChangeToAddressHandler(data) {
    this.setState({ wizardContext: { ...this.state.wizardContext, to: data} });
  }

  onChangeWeightHandler(data) {
    this.setState({ wizardContext: { ...this.state.wizardContext, weight: data.weight} });
  }

  onChangeShippingOptionHandler(data) {
    this.setState({ wizardContext: { ...this.state.wizardContext, shippingOption: data.shippingOption} });
  }

  _confirm() {
    const { onComplete } = this.props;
    const { wizardContext } = this.state;
    onComplete(wizardContext);
  }

  render() {
    const { currentStep, wizardContext } = this.state;
    
    return (
      <div className="container">
        <Progress type="line" percent={this.state.currentStep * 20} strokeColor="black" showInfo={true} />
       <StepOne 
          currentStep={currentStep} 
          onDataChange={this.onFChangeromAddressHandler}
          fromAddress={wizardContext.from} 
        />
        <StepTwo 
          currentStep={currentStep} 
          onDataChange={this.onChangeToAddressHandler}
          toddress={wizardContext.to} 
        />
        <StepThree
          currentStep={currentStep} 
          onDataChange={this.onChangeWeightHandler}
          weight={wizardContext} 
        />
        <StepFour
          currentStep={currentStep} 
          onDataChange={this.onChangeShippingOptionHandler}
          shipping={wizardContext} 
        />
        <StepFive 
          currentStep={currentStep} 
          shippingInfo={wizardContext}
        />
        <div style={{ marginTop: 20 }}>
          <Button type="primary" onClick={this._prev} disabled={currentStep === 1} style={{ marginRight: 20 }}>Previous</Button>
          <Button type="primary" onClick={this._next} disabled={currentStep === 5}>Next</Button>
          <Button type="primary" onClick={this._confirm} disabled={currentStep !== 5} style={{ marginLeft: 20 }}>Confirm</Button>
        </div>
      </div>
    );
  }
}


Wizard.propTypes = {
  wizardContext: PropTypes.shape({
    from: {
      name: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
    },
    to: {
      name: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
    },
    weight: PropTypes.string.isRequired,
    shippingOption: PropTypes.number.isRequired,
  }).isRequired,
  // wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Wizard;
