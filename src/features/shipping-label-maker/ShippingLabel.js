import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Divider } from 'antd';
import { Card } from 'antd';

class ShippingLabel extends Component { 
  render() {
    const { shippingInfo } = this.props;

		const shippingRate = 0.40;

    let shippingCost = shippingInfo.weight * shippingRate * ( shippingInfo.shippingOption === '1'  ? 1 : 1.5 );

    return (
      <div>
				<Divider>ShippingLabel</Divider>
				<Row type="flex">
					<Col span={24}>
			    	<Row type="flex">
			      	<Col span={8}>
								<div style={{ background: '#ECECEC', padding: '30px' }}>
									<Card title="From Information" bordered={false} style={{ width: 300 }}>
										<p>Name : {shippingInfo.from.name}</p>
										<p>Street : {shippingInfo.from.street}</p>
										<p>City : {shippingInfo.from.city}</p>
										<p>State : {shippingInfo.from.state}</p>
										<p>Zip : {shippingInfo.from.zip}</p>
									</Card>
							  </div>
				       </Col>
							<Col span={8}>
								<div style={{ background: '#ECECEC', padding: '30px' }}>
									<Card title="To Information" bordered={false} style={{ width: 300 }}>
										<p>Name : {shippingInfo.to.name}</p>
										<p>Street : {shippingInfo.to.street}</p>
										<p>City : {shippingInfo.to.city}</p>
										<p>State : {shippingInfo.to.state}</p>
										<p>Zip : {shippingInfo.to.zip}</p>
									 </Card>
								 </div>
								</Col>
							<Col span={8}>
								<div style={{ background: '#ECECEC', padding: '30px' }}>
									<Card title="Other Information" bordered={false} style={{ width: 300 }}>
										<p>Shipping Weight : {shippingInfo.weight}</p>
										<p>Shipping Method : {shippingInfo.shippingOption === '1' ? 'Ground' : 'Priority'}</p>
										<p>Shipping Cost : ${shippingCost}</p>
										<p>Press click on</p>
										<p>Confirm Button</p>
									 </Card>
								 </div>
								</Col>
							</Row>
						</Col>
					</Row>
      </div>
   );
  }
}

export default ShippingLabel;