import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Spin } from 'antd';
import Doctor from './Doctor';
import DoctorNew from './DoctorNew';
import Patient from './Patient';
import PatientPassword from './PatientPassword';
import LoginPatient from './LoginPatient';
import LoginDoctor from './LoginDoctor';
import Signup from './Signup';
import Logout from './Logout';
import Errorpage from './Errorpage';
import Nav from './common/Nav'
import Foot from './common/Foot'



import { Layout} from 'antd';
const {Content}=Layout;

class App extends React.Component
{
	render()
	{

		let {loading}=this.props
		return (
				<Router>
					<Spin spinning={loading}>
					<Layout className="layout">
						<Nav />
						<Content style={{ padding: '0 50px' }}>
							<div className="site-layout-content">
								<Switch>
									<Route exact path="/" component={LoginDoctor} />
									<Route exact path="/login/patient" component={LoginPatient} />
									<Route exact path="/signup" component={Signup} />
									<Route exact path="/doctor/panel" component={Doctor} />
									<Route exact path="/doctor/new" component={DoctorNew} />
									<Route exact path="/patient/panel" component={Patient} />
									<Route exact path="/patient/password" component={PatientPassword} />
									<Route exact path="/logout" component={Logout} />
									<Route  component={Errorpage} />
								</Switch>
							</div>
						</Content>
						<Foot />
					</Layout>	
					</Spin>
				</Router>
			)
	}
}
export default connect(state=>state)(App);