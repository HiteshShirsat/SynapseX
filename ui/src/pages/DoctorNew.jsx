import React from 'react';
import {connect} from 'react-redux';
import * as f2 from '../redux/actions';
import { Row, Col } from 'antd';
import { Form, Input, Button ,Result} from 'antd';

import { SmileOutlined ,CloseCircleOutlined} from '@ant-design/icons';
const layout = {labelCol: { span: 8 }, wrapperCol: { span: 16 }, }; 
const tailLayout = {wrapperCol: { offset: 8, span: 16 }, };



class DoctorNew extends React.Component
{
	componentDidMount()
	{
		if(this.props.token)
		{

		}
		else
		{
			this.props.history.push("/")
		}
		
	}
	onFinish = values => this.props.signup1(values)
	render()
	{
		let {showMessage,status,message}=this.props
		return (
				<Row>
				  <Col flex={1}>
				  	<h1 align="center">Welcome doctor new patient wizard </h1>
					<Form
					  {...layout}
					  name="basic"
					  initialValues={{ remember: true }}
					  onFinish={this.onFinish}
					>
					     <Form.Item
					       label="Email"
					       name="email"
					       rules={[{ required: true, message: 'Please enter your Email!' }]}
					     >
					       <Input />
					     </Form.Item>

					     <Form.Item
					       label="Password"
					       name="password"
					       rules={[{ required: true, message: 'Please enter your password!' }]}
					     >
					       <Input.Password />
					     </Form.Item>
					     <Form.Item
					       label="Firstname"
					       name="firstname"
					       rules={[{ required: true, message: 'Please enter your firstname!' }]}
					     >
					       <Input />
					     </Form.Item>

					     <Form.Item
					       label="Lastname"
					       name="lastname"
					       rules={[{ required: true, message: 'Please enter your lastname!' }]}
					     >
					       <Input />
					     </Form.Item>

					     <Form.Item
					       label="Phone Number"
					       name="phone"
					       rules={[{ required: true, message: 'Please enter your phone!' }]}
					     >
					       <Input />
					     </Form.Item>

					     <Form.Item
					       label="diagnosis"
					       name="diagnosis"
					       rules={[{ required: true, message: 'Please enter your diagnosis!' }]}
					     >
					       <Input />
					     </Form.Item>


					     <Form.Item
					       label="medical history"
					       name="medical"
					       rules={[{ required: true, message: 'Please enter your medical history!' }]}
					     >
					       <Input />
					     </Form.Item>

					     <Form.Item
					       label="country"
					       name="country"
					     >
					       <Input />
					     </Form.Item>
					     


					     <Form.Item
					       label="address"
					       name="address"
					     >
					       <Input />
					     </Form.Item>
					     

					     <Form.Item
					       label="city"
					       name="city"
					     >
					       <Input />
					     </Form.Item>
					     

					     <Form.Item
					       label="state"
					       name="state"
					     >
					       <Input />
					     </Form.Item>
					     

					     <Form.Item
					       label="pincode"
					       name="pincode"
					       rules={[{ required: true, message: 'Please enter your pincode!' }]}
					     >
					       <Input />
					     </Form.Item>
					     <Form.Item {...tailLayout}>
					       <Button type="primary" htmlType="submit">
					         Signup Now
					       </Button>
					     </Form.Item>
					</Form>
				  </Col>
				  <Col flex={8}>
				  	{showMessage?<Result
				  	   icon={status?<SmileOutlined />:<CloseCircleOutlined className="site-result-demo-error-icon" />}
				  	   title={message}
				  	   extra={<Button type="primary">Next</Button>}
				  	 />:null}
				  </Col>
				</Row>
			)
	}
}
export default connect(state=>state,f2)(DoctorNew);