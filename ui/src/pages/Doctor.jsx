import React from 'react';
import {connect} from 'react-redux';
import * as f2 from '../redux/actions';
import { Table, Input, InputNumber, Popconfirm, Form, Button, Space } from 'antd';

class Doctor extends React.Component
{
	state = {
	    filteredInfo: null,
	    sortedInfo: null,
	  };
	 handleChange = (pagination, filters, sorter) => {
	     console.log('Various parameters', pagination, filters, sorter);
	     this.setState({
	       filteredInfo: filters,
	       sortedInfo: sorter,
	     });
	   };

	   clearFilters = () => {
	     this.setState({ filteredInfo: null });
	   };

	   clearAll = () => {
	     this.setState({
	       filteredInfo: null,
	       sortedInfo: null,
	     });
	   };

	   setAgeSort = () => {
	     this.setState({
	       sortedInfo: {
	         order: 'descend',
	         columnKey: 'dt',
	       },
	     });
	   }; 
	componentDidMount()
	{
		if(this.props.token)
		{
			this.props.loadPatients(this.props.token)
		}
		else
		{
			this.props.history.push("/")
		}
		
	}
	render()
	{
		let data=this.props.patients
		let { sortedInfo, filteredInfo } = this.state;
		   sortedInfo = sortedInfo || {};
		   filteredInfo = filteredInfo || {};
		const columns = [
		     {
		       title: 'Full Name',
		       dataIndex: 'name',
		       key: 'name',
		       filteredValue: filteredInfo.name || null,
		       onFilter: (value, record) => record.name.includes(value),
		       sorter: (a, b) => a.name.length - b.name.length,
		       sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
		       ellipsis: true,
		     },
		     {
		       title: 'email',
		       dataIndex: 'email',
		       key: 'email',
		       filteredValue: filteredInfo.email || null,
		       onFilter: (value, record) => record.email.includes(value),
		       sorter: (a, b) => a.email.length - b.email.length,
		       sortOrder: sortedInfo.columnKey === 'email' && sortedInfo.order,
		       ellipsis: true,
		     },
 		     {
		       title: 'phone',
		       dataIndex: 'phone',
		       key: 'phone',
		       filteredValue: filteredInfo.phone || null,
		       onFilter: (value, record) => record.phone.includes(value),
		       sorter: (a, b) => a.phone.length - b.phone.length,
		       sortOrder: sortedInfo.columnKey === 'phone' && sortedInfo.order,
		       ellipsis: true,
		     },
  		     {
		       title: 'password',
		       dataIndex: 'password',
		       key: 'password',
		       filteredValue: filteredInfo.password || null,
		       onFilter: (value, record) => record.password.includes(value),
		       sorter: (a, b) => a.password.length - b.password.length,
		       sortOrder: sortedInfo.columnKey === 'password' && sortedInfo.order,
		       ellipsis: true,
		     },
		       		     {
		       title: 'diagnosis',
		       dataIndex: 'diagnosis',
		       key: 'diagnosis',
		       filteredValue: filteredInfo.diagnosis || null,
		       onFilter: (value, record) => record.diagnosis.includes(value),
		       sorter: (a, b) => a.diagnosis.length - b.diagnosis.length,
		       sortOrder: sortedInfo.columnKey === 'diagnosis' && sortedInfo.order,
		       ellipsis: true,
		     },
		       		     {
		       title: 'medical',
		       dataIndex: 'medical',
		       key: 'medical',
		       filteredValue: filteredInfo.medical || null,
		       onFilter: (value, record) => record.medical.includes(value),
		       sorter: (a, b) => a.medical.length - b.medical.length,
		       sortOrder: sortedInfo.columnKey === 'medical' && sortedInfo.order,
		       ellipsis: true,
		     },
		       		     {
		       title: 'address',
		       dataIndex: 'address',
		       key: 'address',
		       filteredValue: filteredInfo.address || null,
		       onFilter: (value, record) => record.address.includes(value),
		       sorter: (a, b) => a.address.length - b.address.length,
		       sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
		       ellipsis: true,
		     },
		       		     {
		       title: 'country',
		       dataIndex: 'country',
		       key: 'country',
		       filteredValue: filteredInfo.country || null,
		       onFilter: (value, record) => record.country.includes(value),
		       sorter: (a, b) => a.country.length - b.country.length,
		       sortOrder: sortedInfo.columnKey === 'country' && sortedInfo.order,
		       ellipsis: true,
		     },
		       		     {
		       title: 'state',
		       dataIndex: 'state',
		       key: 'state',
		       filteredValue: filteredInfo.state || null,
		       onFilter: (value, record) => record.state.includes(value),
		       sorter: (a, b) => a.state.length - b.state.length,
		       sortOrder: sortedInfo.columnKey === 'state' && sortedInfo.order,
		       ellipsis: true,
		     },
		       		     {
		       title: 'city',
		       dataIndex: 'city',
		       key: 'city',
		       filteredValue: filteredInfo.city || null,
		       onFilter: (value, record) => record.city.includes(value),
		       sorter: (a, b) => a.city.length - b.city.length,
		       sortOrder: sortedInfo.columnKey === 'city' && sortedInfo.order,
		       ellipsis: true,
		     },
		       		     {
		       title: 'pincode',
		       dataIndex: 'pincode',
		       key: 'pincode',
		       filteredValue: filteredInfo.pincode || null,
		       onFilter: (value, record) => record.pincode.includes(value),
		       sorter: (a, b) => a.pincode.length - b.pincode.length,
		       sortOrder: sortedInfo.columnKey === 'pincode' && sortedInfo.order,
		       ellipsis: true,
		     },
		       		     {
		       title: 'date',
		       dataIndex: 'dt',
		       key: 'dt',
		       filteredValue: filteredInfo.dt || null,
		       onFilter: (value, record) => record.dt.includes(value),
		       sorter: (a, b) => a.dt.length - b.dt.length,
		       sortOrder: sortedInfo.columnKey === 'dt' && sortedInfo.order,
		       ellipsis: true,
		     },
		     {
		             title: 'Remove',
		             key: 'action',
		             render: () => <a>Delete</a>,
		           }
		     ,
		     {
		             title: 'Changes',
		             key: 'action',
		             render: () => <a>Edit</a>,
		           }
		     
		     


		   ];   
		return (
				<div>
				        <Space style={{ marginBottom: 16 }}>
				          <Button onClick={this.setAgeSort}>Sort Date</Button>
				          <Button onClick={this.clearFilters}>Clear filters</Button>
				          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
				        </Space>
				        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
				</div>
			)
	}
}
export default connect(state=>state,f2)(Doctor);