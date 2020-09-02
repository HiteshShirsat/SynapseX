import React from 'react';
import { Descriptions } from 'antd';
import * as f2 from '../redux/actions';
import {connect} from 'react-redux';



class Patient extends React.Component
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
	render()
	{
		let x=this.props.user
		return <div>
			<Descriptions title="User Info" layout="vertical">
			   <Descriptions.Item label="UserName">{x.name}</Descriptions.Item>
			   <Descriptions.Item label="Telephone">{x.phone}</Descriptions.Item>
			   <Descriptions.Item label="Live">{x.address}</Descriptions.Item>
			   <Descriptions.Item label="Address" span={2}>
			     {x.country}

			     {x.state}
			     
			     {x.city}
			     
			     {x.pincode}
			     
			   </Descriptions.Item>
			   <Descriptions.Item label="Remark">change password click above</Descriptions.Item>
			 </Descriptions>
			 
		</div>
	}
}
export default connect(state=>state,f2)(Patient);