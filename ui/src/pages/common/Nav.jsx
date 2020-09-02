import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import * as f2 from '../../redux/actions';
import {connect} from 'react-redux';

const { Header } = Layout;


class Nav extends React.Component
{
	render()
	{
		let {role,isLoggedIn}=this.props

		return <>
			<Header>
			 <div className="logo" >.</div>
			 <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
			   {role===""?<Menu.Item key="1"><Link to="/">Doctor Login</Link></Menu.Item>:null}
			   {role===""?<Menu.Item key="2"><Link to="/login/patient">Patient Login</Link></Menu.Item>:null}
			   {role===""?<Menu.Item key="3"><Link to="/signup">Signup as Patient</Link></Menu.Item>:null}
			   
			   {role==="doctor"?<Menu.Item key="4"><Link to="/doctor/panel">Doctor Panel</Link></Menu.Item>:null}
			   {role==="doctor"?<Menu.Item key="5"><Link to="/doctor/new">New Patient</Link></Menu.Item>:null}
			   {role==="patient"?<Menu.Item key="6"><Link to="/patient/panel">Patient Panel</Link></Menu.Item>:null}
			   {role==="patient"?<Menu.Item key="7"><Link to="/patient/password">change password</Link></Menu.Item>:null}
			   {role?<Menu.Item key="8"><Link to="/logout">Logout</Link></Menu.Item>:null}
			 </Menu>
			</Header>
		</>
	}
}
export default connect(state=>state,f2)(Nav);