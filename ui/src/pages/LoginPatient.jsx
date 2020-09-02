import React from 'react';
import {connect} from 'react-redux';
import * as f2 from '../redux/actions';
import { Row, Col } from 'antd';
import { Form, Input, Button ,Result} from 'antd';

import { SmileOutlined ,CloseCircleOutlined} from '@ant-design/icons';
const layout = {labelCol: { span: 8 }, wrapperCol: { span: 16 }, }; 
const tailLayout = {wrapperCol: { offset: 8, span: 16 }, };



class LoginPatient extends React.Component
{
	onFinish = values => this.props.loginPatient(values)
	componentDidMount()
	{
		this.props.message()
	}

	render()
	{
		let {showMessage,status,message}=this.props
		return (
				<Row>
				  <Col flex={1}>
				  	<h1 align="center">Patient Login </h1>
					<Form
					  {...layout}
					  name="basic"
					  initialValues={{ remember: true }}
					  onFinish={this.onFinish}
					>
					  <Form.Item
					    label="Username"
					    name="email"
					    rules={[{ required: true, message: 'Please input your username!' }]}
					  >
					    <Input />
					  </Form.Item>

					  <Form.Item
					    label="Password"
					    name="password"
					    rules={[{ required: true, message: 'Please input your password!' }]}
					  >
					    <Input.Password />
					  </Form.Item>

					  <Form.Item {...tailLayout}>
					    <Button type="primary" htmlType="submit">
					      Login Now
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
export default connect(state=>state,f2)(LoginPatient);
