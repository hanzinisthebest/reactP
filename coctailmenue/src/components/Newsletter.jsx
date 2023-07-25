import React, { useContext, useRef, useState } from 'react'
import AppContext from '../store/AppContext';
import {  useNavigate } from "react-router-dom";
function Newsletter() {
  const {setEmail} = useContext(AppContext);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const [errorEmailMsg,setErrorEmailMsg] =useState('');
  const submitHandler = (e)=>{
    e.preventDefault();
    const email = emailRef.current.value; 
    setEmail(email);
    if(email!='test@test.com'){
     setErrorEmailMsg("must be test email");
    }
    else{
     alert('thanks');
      return navigate('/');
    }
  }
  return (
    <>
    {<p style={{textAlign:'center' }}>{errorEmailMsg}</p>}
    <form onSubmit={submitHandler} action="" style={{width:"100%",maxWidth:"600px",background:"#fff",borderRadius:".25rem",
    boxShadow:"0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)",padding:"2rem 2.5rem",margin:"3rem auto"}}>
    <h4 style={{textAlign: "center",
    marginBottom: "2rem" ,fontSize: "clamp(1rem,2vw,2rem)"}}>Our NewsLetter</h4>
    <label htmlFor="" style={{display:"block",fontSiz:".875rem",marginBottom:"0.5rem",textTransform:'capitalize',letterSpacing:"1px"}}>Name</label>
    <input type="text" placeholder={"Name"} style={{marginBottom:"0.5rem",width:"100%",padding:'.375rem .75rem',borderRadius:'.25rem', background:'#f8fafc', border:'1px solid #e2e8f0'}} required/>
    <label htmlFor="" style={{display:"block",fontSiz:".875rem",marginBottom:"0.5rem",textTransform:'capitalize',letterSpacing:"1px"}}>Last name</label>
    <input type="text" placeholder={"Last Name"} style={{ marginBottom:"0.5rem",width:"100%",padding:'.375rem .75rem',borderRadius:'.25rem', background:'#f8fafc', border:'1px solid #e2e8f0'}} required />
    <label htmlFor="" style={{display:"block",fontSiz:".875rem",marginBottom:"0.5rem",textTransform:'capitalize',letterSpacing:"1px"}}>Email</label>
    <input type="email" ref={emailRef} defaultValue={"test@test.com"} style={{marginBottom:"0.5rem",width:"100%",padding:'.375rem .75rem',borderRadius:'.25rem', background:'#f8fafc', border:'1px solid #e2e8f0'}} required />
    <button type='submit' style={{width:'100%', marginTop:'0.5rem',cursor:'pointer',color:'#fff',background:'#10b981' ,border:'transparent',borderRadius:'.25rem', 
     letterSpacing:'1px',padding: '0.375rem 0.75rem',transition: '.3s ease-in-out all',textTransform:'capitalize',display:'inline-block'}}>Submit</button>
    </form>

    </>
  )
}

export default Newsletter
