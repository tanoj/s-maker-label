import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Input } from 'antd'
import { Divider } from 'antd';

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.toddress.name,
      street: props.toddress.city,
      city: props.toddress.name,
      state: props.toddress.state,
      zip: props.toddress.zip,
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
    if (currentStep !== 2) {
      return null;
    } 
    const {
      name, street, city, state, zip,
    } = this.state;

    return (
      <div>
        {/* <Divider>Step 2: Please enter To Address</Divider> */}
        <Row>
          <Col span={24}>
            <Row align='middle' justify='center' style={{ marginBottom: 20 }}>
              <Col span={4}>
                <Input 
                  placeholder="Name" 
                  name='name'
                  onChange={this.onTextChange}
                  value={name}
                  />
              </Col>
            </Row>
            <Row align='middle' justify='center' style={{ marginBottom: 20 }}>
              <Col span={4}>
                <Input 
                  placeholder="Street" 
                  name='street'
                  onChange={this.onTextChange}
                  value={street}
                />
              </Col>
            </Row>
            <Row align='middle' justify='center' style={{ marginBottom: 20 }}>
               <Col span={4}>
                <Input 
                  placeholder="City" 
                  name='city'
                  onChange={this.onTextChange}
                  value={city}
                />
               </Col>
               <Col span={4}>
                <Input 
                  placeholder="State" 
                  name='state'
                  onChange={this.onTextChange}
                  value={state}
                />
               </Col>
               <Col span={4}>
                <Input 
                  placeholder="Zip" 
                  name='zip'
                  onChange={this.onTextChange}
                  value={zip}
                />
               </Col>
             </Row>
          </Col>
        </Row>
      </div>
   );
  }
}

export default StepTwo;

