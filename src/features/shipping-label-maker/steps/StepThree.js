import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { Divider } from 'antd';

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: props.weight.weight,
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
    if (currentStep !== 3) {
      return null;
    } 
    const {
      weight,
    } = this.state;

    return (
      <div>
        {/* <Divider>Step 3: Please enter Weight</Divider> */}
        <Row>
          <Col span={24}>
            <Row align='middle' justify='center'>
              <Col span={4}>
                <Input 
                  placeholder="Weight" 
                  name='weight'
                  onChange={this.onTextChange}
                  value={weight}
                  />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
   );
  }
}

export default StepThree;