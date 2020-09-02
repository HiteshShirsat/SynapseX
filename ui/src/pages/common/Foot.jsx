import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

class Foot extends React.Component
{
	render()
	{
		return <>
			<Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by HiteshShirsat21@gmail.com</Footer>
		</>
	}
}
export default Foot;