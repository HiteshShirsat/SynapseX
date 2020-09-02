import React from 'react';
import {connect} from 'react-redux';
import * as f2 from '../redux/actions';
import { Row, Col } from 'antd';
import { Button ,Result} from 'antd';

import { SmileOutlined} from '@ant-design/icons';



class Logout extends React.Component
{
	componentDidMount()
	{
		this.props.logout()
	}
	render()
	{
		return (
				<Row>
				  <Col flex={8}>
				  	<Result
				  	   icon={<SmileOutlined />}
				  	   title={"You have successfully logout of system "}
				  	   extra={<Button type="primary">Thanks</Button>}
				  	 />
				  </Col>
				</Row>
			)
	}
}
export default connect(state=>state,f2)(Logout);