
import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email:"admin@admin.com",
    password:"admin123"
  }
  const [user,setUser] = useState({name:"",email:""});
  const [error,setError] =useState("");
  const [loggedin,setLoggedin] = useState(false);
  const Login= (deatiles)=>{
    if(deatiles.email != adminUser.email || deatiles.password != adminUser.password){      
      setError("detailes are not right");
      return;
    }
    console.log(deatiles.name);
    setUser({name:deatiles.name,email:deatiles.email});
    setLoggedin(!loggedin);
  }
  const Logout = ()=>{
    setLoggedin(!loggedin);
    setError("");
    }
  return (
    <div className="App">
      {(user.email!="" && loggedin) ? (
        <div className="welcome">
          <h2>Welcome <span>{user.name}</span></h2>
          <button onClick={Logout}>logout</button>
        </div>
      ):<LoginForm Login={Login} error={error} />
      }
    </div>
  );
}

export default App;
