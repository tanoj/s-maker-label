import React, { Component } from 'react';
import { Row, Col, Form, Input, Divider} from 'antd';

const FormItem = Form.Item;

class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.fromAddress.name,
      street: props.fromAddress.city,
      city: props.fromAddress.name,
      state: props.fromAddress.state,
      zip: props.fromAddress.zip,
    };
    this.onTextChange = this.onTextChange.bind(this);
  }

  async onTextChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    const { onDataChange } = this.props;
    await this.setState(() => (
      {
        [key]: value,
      }
    ));
    onDataChange(this.state);
  }

  render() {
    const { currentStep } = this.props;
    if (currentStep !== 1) {
      return null;
    } 
    const {
      name, street, city, state, zip,
    } = this.state;

    return (
      <div className="">
        <div className="">Enter the Receiver Address</div>
        <Row>
            <Col span={4}>
              <FormItem label="Name">
                <Input 
                  placeholder="Name"
                  name='name'
                  onChange={this.onTextChange}
                  value={name}
                  />
                  </FormItem>
              </Col>
  </Row>
            <Row>
              <Col span={4}>
              <FormItem label="Street">
                <Input 
                  placeholder="Street" 
                  name='street'
                  onChange={this.onTextChange}
                  value={street}
                />
                </FormItem>
              </Col>
            </Row>
            <Row align='middle' justify='center' style={{ marginBottom: 20 }}>
               <Col span={4}>
               <FormItem label="City">
                <Input 
                  placeholder="City" 
                  name='city'
                  onChange={this.onTextChange}
                  value={city}
                />
                </FormItem>
               </Col>
               <Col span={4}>
               <FormItem label="State">
                <Input 
                  placeholder="State" 
                  name='state'
                  onChange={this.onTextChange}
                  value={state}
                />
                </FormItem>
               </Col>
               <Col span={4}>
               <FormItem label="Zip">
                <Input 
                  placeholder="Zip" 
                  name='zip'
                  onChange={this.onTextChange}
                  value={zip}
                />
                </FormItem>
               </Col>
             </Row>
   
        
      </div>
   );
  }
}

export default StepOne;