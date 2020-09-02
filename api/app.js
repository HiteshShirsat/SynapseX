var express=require("express")
var mysql=require("mysql")
var cors=require("cors")
var body=require("body-parser")
var jwt=require("jsonwebtoken")
var bb=require("bluebird")
var con=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"dp",
})

var db=bb.promisifyAll(con)

var app=express()
app.use(cors())
app.use(body.json())
app.use(body.urlencoded({extended:true}))

var secret="hiteshshirsat21@gmail.com"

function doctor1(req,res,next){next();}
function doctor(req,res,next)
{	
	let status=false
	if(req.headers.authorization)
	{
		if(req.headers.authorization.split(" ")[1])
		{
			let token=req.headers.authorization.split(" ")[1]
			jwt.verify(token,secret,(err,data)=>{
				if(data)
				{
					if(data.id && data.doctor)
					{
						status=true
					}

				}
			})
		}

	}
	if(status==true)
	{
		next()
	}
	else
	{
		res.json({status:false,msg:"not allowed kindly login to continue to view doctor panel",data:[],err:"please provide token"})
	}
}

function patient(req,res,next)
{	
	let status=false
	if(req.headers.authorization)
	{
		if(req.headers.authorization.split(" ")[1])
		{
			let token=req.headers.authorization.split(" ")[1]
			jwt.verify(token,secret,(err,data)=>{
				if(data)
				{
					if(data.id && data.patient)
					{
						req.id=data.id
						status=true
					}

				}
			})
		}

	}
	if(status==true)
	{
		next()
	}
	else
	{
		res.json({status:false,msg:"not allowed kindly login to continue to view patient panel",data:[],err:"please provide token"})
	}
}



app.post("/login",(req,res,next)=>{
	let email=req.body.email
	let password=req.body.password
	let role=req.body.role
	let sql=`select * from ${role} where email='${email}' and password='${password}'`
	db.queryAsync(sql)
	.then(d=>{
		if(d.length>0)
		{
			if(role=="doctor")
			{
				jwt.sign({id:d[0].id,doctor:true},secret,(err,token)=>{
					if(err)
					{
						return res.json({status:false,msg:"failed to provide tokken too many requests",data:"",err:err})
					}
					else
					{
						return res.json({status:true,msg:"welcome doctor",data:d[0],err:"",token:token})
					}
				})
				
			}
			else
			{
				jwt.sign({id:d[0].id,patient:true},secret,(err,token)=>{
					if(err)
					{
						return res.json({status:false,msg:"failed to provide tokken too many requests",data:"",err:err})
					}
					else
					{
						return res.json({status:true,msg:"welcome patient",data:d[0],err:"",token:token})
					}
				})
			}
		}
		else
		{
			return res.json({status:false,msg:"failed to login as "+role,data:"",err:"data not found"})
		}
	})
	.catch(e=>res.json({status:false,msg:"failed to login",data:[],err:e}))	
})

app.post("/signup",(req,res,next)=>{
	let name=req.body.firstname+" "+req.body.lastname
	let email=req.body.email
	let password=req.body.password
	let phone=req.body.phone
	let diagnosis=req.body.diagnosis
	let medical=req.body.medical
	let address=req.body.address
	let country=req.body.country
	let state=req.body.state
	let city=req.body.city
	let pincode=req.body.pincode
	let sql=`insert into patient(name,email,password,phone,diagnosis,medical,address,country,state,city,pincode)values('${name}','${email}','${password}','${phone}','${diagnosis}','${medical}','${address}','${country}','${state}','${city}','${pincode}')`


	db.queryAsync(sql)
	.then(d=>res.json({status:true,msg:"signup success",data:d,err:""}))
	.catch(e=>res.json({status:false,msg:"failed signup as new  patient",data:[],err:e}))	
	
})


app.get("/token/patient",(req,res,next)=>{
	
	let status=false
	
	if(req.headers.authorization)
	{
		if(req.headers.authorization.split(" ")[1])
		{
			let token=req.headers.authorization.split(" ")[1]
			jwt.verify(token,secret,(err,data)=>{
				if(data)
				{
					if(data.id && data.patient)
					{
						status=true
					}

				}
			})
		}

	}
	return res.json({status:status})
})





app.get("/token/doctor",(req,res,next)=>{
	
	let status=false

	if(req.headers.authorization)
	{
		if(req.headers.authorization.split(" ")[1])
		{
			let token=req.headers.authorization.split(" ")[1]
			
			jwt.verify(token,secret,(err,data)=>{
				if(data)
				{
					if(data.id && data.doctor)
					{
						status=true
					}

				}
			})
		}
	}

	return res.json({status:status})

})





app.get("/patients",doctor,(req,res,next)=>{
	let sql=`select * from patient`
	db.queryAsync(sql)
	.then(d=>res.json({status:true,msg:"fetched all patients",data:d,err:""}))
	.catch(e=>res.json({status:false,msg:"failed fetching all patients",data:[],err:e}))
})

app.delete("/patients/:id",doctor,(req,res,next)=>{
	let id=req.params.id
	let sql=`delete from patient where id=${id}`
	db.queryAsync(sql)
	.then(d=>res.json({status:true,msg:"deleted this patient",data:d,err:""}))
	.catch(e=>res.json({status:false,msg:"failed deleting  patients",data:[],err:e}))	
})

app.patch("/patients/:id",doctor,(req,res,next)=>{
	let id=req.params.id
	let name=req.body.firstname+" "+req.body.lastname
	
	
	let email=req.body.email
	let password=req.body.password
	let phone=req.body.phone
	let diagnosis=req.body.diagnosis
	let medical=req.body.medical
	let address=req.body.address
	let country=req.body.country
	let state=req.body.state
	let city=req.body.city
	let pincode=req.body.pincode
	let sql=`
		update patient set
		name='${name}',
		email='${email}',
		password='${password}',
		phone='${phone}',
		diagnosis='${diagnosis}',
		medical='${medical}',
		address='${address}',
		country='${country}',
		state='${state}',
		city='${city}',
		pincode='${pincode}'
		where
		id='${id}'

	`
	db.queryAsync(sql)
	.then(d=>res.json({status:true,msg:"updated this patient",data:d,err:""}))
	.catch(e=>res.json({status:false,msg:"failed updating  patients",data:[],err:e}))	
})

app.post("/patients/",doctor,(req,res,next)=>{
	let name=req.body.firstname+" "+req.body.lastname
	
	
	let email=req.body.email
	let password=req.body.password
	let phone=req.body.phone
	let diagnosis=req.body.diagnosis
	let medical=req.body.medical
	let address=req.body.address
	let country=req.body.country
	let state=req.body.state
	let city=req.body.city
	let pincode=req.body.pincode

	let sql=`insert into patient(name,email,password,phone,diagnosis,medical,address,country,state,city,pincode)values('${name}','${email}','${password}','${phone}','${diagnosis}','${medical}','${address}','${country}','${state}','${city}','${pincode}')`


	db.queryAsync(sql)
	.then(d=>res.json({status:true,msg:"added new patient",data:d,err:""}))
	.catch(e=>res.json({status:false,msg:"failed adding new  patient",data:[],err:e}))	

})


app.get("/patient",patient,(req,res,next)=>{
	let sql=`select * from patient where id=${req.id}`
	db.queryAsync(sql)
	.then(d=>res.json({status:true,msg:"fetched your profile",data:d,err:""}))
	.catch(e=>res.json({status:false,msg:"failed fetching your profile",data:[],err:e}))
})

app.patch("/patient",patient,(req,res,next)=>{
	let password=req.body.password
	let sql=`update patient set password='${password}' where id=${req.id}`
	db.queryAsync(sql)
	.then(d=>res.json({status:true,msg:"your password updated",data:d,err:""}))
	.catch(e=>res.json({status:false,msg:"failed to update your password",data:[],err:e}))	
})


app.listen(4000,()=>console.log("server started on port 4000"))