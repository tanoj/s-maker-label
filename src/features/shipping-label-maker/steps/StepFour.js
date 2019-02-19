import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Select } from 'antd';
import { Divider } from 'antd';

const Option = Select.Option;
let selectedValue;

class StepFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingOption: props.shipping.shippingOption,
    };
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  async onSelectChange(value) {
    const { onDataChange } = this.props;
    await this.setState(() => (
      {
        shippingOption: value,
      }
    ));
    onDataChange(this.state);
  }

  render() {
    const { currentStep } = this.props;
    if (currentStep !== 4) {
      return null;
    } 
    const {
      shippingOption,
    } = this.state;

    if(shippingOption === '2') {
     selectedValue = 'Priority';
    } else {
      selectedValue = 'Ground';
    }

    return (
      <div>
        {/* <Divider>Step 4: Please select Shipping Option</Divider> */}
        <Row>
          <Col span={24}>
            <Row align='middle' justify='center'>
              <Col span={4}>
                <Select 
                  defaultValue={selectedValue} 
                  style={{ width: 120 }} 
                  onChange={this.onSelectChange}
                  name='shippingOption'
                >
                  <Option value="1">Ground</Option>
                  <Option value="2">Priority</Option>
                 </Select>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
   );
  }
}

export default StepFour;