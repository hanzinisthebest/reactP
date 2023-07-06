import React, { useState } from 'react'

function LoginForm({Login,error}) {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const onLogin= (e)=>{
        e.preventDefault();
        Login({
            name:name,
               email:email,
               password:password})
    }
  return (
 <form onSubmit={onLogin}>
    <h2>Login</h2>
    <h3>{error}</h3>
    <div className="form-group">
        <label htmlFor="">Name:</label><input type="text" name='name' id='name' onChange={(e)=>setName(e.target.value)} value={name}/></div>
    <div className="form-group"><label htmlFor="">Email:</label><input type="email" name='email' onChange={(e)=>setEmail(e.target.value)} value={email}/></div>
    <div className="form-group"><label htmlFor="">Password:</label><input type="text" name='password' onChange={(e)=>setPassword(e.target.value)} value={password} /></div>
    <input type="submit" value="LOGIN" />
 </form>
  )
}

export default LoginForm
