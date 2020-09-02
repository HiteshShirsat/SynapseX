const intialState={
	role:"",
	user:{},
	a:[],
	status:false,
	message:"",
	loading:false,
	isLoggedIn:false,
	showMessage:false,
	token:""
}

const reducer=(state=intialState,action)=>{
	switch(action.type)
	{
		case "doctor login success":
			return {
				...state,
				message:action.payload.msg,
				isLoggedIn:true,
				loading:false,
				role:"doctor",
				status:true,
				showMessage:true,
				token:action.payload.token,
				user:action.payload.data
			}

		case "doctor login failed":
			return {
				...state,
				message:action.payload.msg,
				isLoggedIn:false,
				loading:false,
				role:"",
				status:false,
				showMessage:true,
				token:""
			}
		case "patient login success":
			return {
				...state,
				message:action.payload.msg,
				isLoggedIn:true,
				loading:false,
				role:"patient",
				status:true,
				showMessage:true,
				token:action.payload.token,
				user:action.payload.data
			}

		case "patient login failed":
			return {
				...state,
				message:action.payload.msg,
				isLoggedIn:false,
				loading:false,
				role:"",
				status:false,
				showMessage:true,
				token:"",
				user:{}
			}
		case "patient signup success":
				return {
					...state,
					message:action.payload.msg,
					loading:false,
					status:true,
					showMessage:true,
				}

		case "patient registered success":
				return {
					...state,
					message:action.payload.msg,
					loading:false,
					status:true,
					showMessage:true,
				}

		case "patient signup failed":
				return {
					...state,
					message:action.payload.msg,
					loading:false,
					status:false,
					showMessage:true,
				}
				
		case "patients load success":
				return {
					...state,
					message:action.payload.msg,
					loading:false,
					status:true,
					showMessage:true,
					patients:action.payload.data
				}
		case "password changed":
				return {
					...state,
					message:action.payload.msg,
					loading:false,
					status:action.payload.status,
					showMessage:true
				}
				
		case "patients load failed":
				return {
					...state,
					message:action.payload.msg,
					loading:false,
					status:false,
					showMessage:true,
					patients:[]
				}
				
				
			

		case "loading":
			return {
				...state,
				loading:true,
				showMessage:false
			}
		case "logout":
			return {
				...state,
				message:"",
				isLoggedIn:false,
				loading:false,
				role:"",
				status:true,
				showMessage:false,
				token:"",
				user:{}
			}
			
		default:
			return state
	}
}

export default reducer;