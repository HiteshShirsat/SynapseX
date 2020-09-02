import axios from 'axios';
const base="http://localhost:4000"
export function loginDoctor(ob)
{
	
		return dispatch=>{
		dispatch({type:"loading",payload:""})
	
		axios.post(`${base}/login`,{...ob,role:"doctor"}).then(res=>res.data)	
		.then(d=>{
			if(d.token)
			{
				setTimeout(()=>{
					this.history.push("/doctor/panel")
				},2000)
				dispatch({type:"doctor login success",payload:d})
			}
			else
			{
				dispatch({type:"doctor login failed",payload:d})
			}
		})
		.catch(d=>{
			dispatch({type:"doctor login failed",payload:d})
		})
	}
	
}
export function PatientPassword(id,ob,token)
{
	
		return dispatch=>{
		dispatch({type:"loading",payload:""})
	
		axios.patch(`${base}/patient/${id}`,ob,{headers:{Authorization:`bearer ${token}`}}).then(res=>res.data)	
		.then(d=>{
				dispatch({type:"password changed",payload:d})
		})
		.catch(d=>{
			dispatch({type:"doctor login failed",payload:d})
		})
	}
	
}
export function loginPatient(ob)
{
	
		return dispatch=>{
		dispatch({type:"loading",payload:""})
	
		axios.post(`${base}/login`,{...ob,role:"patient"}).then(res=>res.data)	
		.then(d=>{
			if(d.token)
			{
				setTimeout(()=>{
					this.history.push("/patient/panel")
				},2000)
			dispatch({type:"patient login success",payload:d})
			}
		})
		.catch(d=>{
			dispatch({type:"patient login failed",payload:d})
		})
	}
	
}

export function signup(ob)
{
	
		return dispatch=>{
		dispatch({type:"loading",payload:""})
	
		axios.post(`${base}/signup`,ob).then(res=>res.data)	
		.then(d=>{
			if(d.status)
			{
				setTimeout(()=>{
					this.history.push("/login/patient")
				},2000)
				dispatch({type:"patient signup success",payload:d})
			}
		})
		.catch(d=>{
			dispatch({type:"patient signup failed",payload:d})
		})
	}
	
}
export function signup1(ob)
{
	
		return dispatch=>{
		dispatch({type:"loading",payload:""})
	
		axios.post(`${base}/signup`,ob).then(res=>res.data)	
		.then(d=>{
				dispatch({type:"patient registered success",payload:d})
		})
		.catch(d=>{
			dispatch({type:"patient signup failed",payload:d})
		})
	}
	
}

export function loadPatients(t)
{
	
		return dispatch=>{
		dispatch({type:"loading",payload:""})
		axios.get(`${base}/patients`,{headers:{Authorization:`bearer ${t}`}}).then(res=>res.data)	
		.then(d=>{
			dispatch({type:"patients load success",payload:d})
		})
		.catch(d=>{
			dispatch({type:"patients load failed",payload:d})
		})
	}
	
}


export function logout()
{
	return dispatch=>dispatch({type:"logout",payload:""})
}
export function message()
{
	return dispatch=>dispatch({type:"message",payload:""})
}
