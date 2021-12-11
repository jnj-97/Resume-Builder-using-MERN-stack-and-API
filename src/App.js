import Resume from './screens/Resume';
import ResumeScreen from './screens/ResumeScreen';
import Header from './screens/Header';
import Home from './screens/Home'
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import { useState } from 'react';
import {Link,useHistory,withRouter} from 'react-router-dom'
import './Home_foot.css'
function App() {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [alreadyuse,setAlready]=useState(false)
const [redirect,setRedirect]=useState(false)
const [wrong,setWrong]=useState(false)
const submitForm=(event)=>{
  setAlready(false);
  setRedirect(false)
  event.preventDefault();
  console.log(event);
fetch('http://18d1-103-6-158-106.ngrok.io/signup',{
  method:'POST',
  headers:{'Content-type':'application/json'},
  body:JSON.stringify({Email:email,Password:password})
}).then(result=>result.text()).then(data=>{
  console.log(data)
if (data==='Email already exists'){
    setAlready(true)
    setRedirect(false)
    console.log(alreadyuse)
}
else{
  setAlready(false)
  setRedirect(true)
}
})
.catch(err=>console.log(err))
}
const submitLogin=(event)=>{
  setWrong(false);
  setRedirect(false)
  event.preventDefault();
  console.log(event);
fetch('http://18d1-103-6-158-106.ngrok.io/login',{
  method:'POST',
  headers:{'Content-type':'application/json'},
  body:JSON.stringify({Email:email,Password:password})
}).then(result=>result.text()).then(data=>{
  console.log(data)
if (data==='Correct'){
    setWrong(false)
    setRedirect(true)
}
else{
  setWrong(true)
  setRedirect(false)
}
})
.catch(err=>console.log(err))
}

  return (
    <Router>
    

   
    <div className="app">
        <Switch>
          
          <Route path="/resume/download">
            <Header/>
            <ResumeScreen />
          </Route>
        

          <Route path="/resume">
            <Header />
            <Resume />
          </Route>
          <Route path="/signup">
          <div className="Signup">
            <h1 className="sl"> Signup </h1><br/>
            <div style={{marginRight:0,color:"blue"}}><Button style={{backgroundColor:"lightgray"}}><Link  to="/">Home</Link></Button></div>
            <form onSubmit={submitForm}>
              <table>
                <tbody>
                  
                  <tr> <td><label>Please Enter your Email</label></td></tr>
                    <tr><td> <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input></td></tr>
                    <tr><td><label>Please Enter your Password</label></td></tr>
                    <tr> <td> <input type="password"  minlength="8" required value={password} onChange={(e)=>setPassword(e.target.value)}></input></td></tr>
                    <tr> <td><button type="submit" >Register</button></td></tr>
                </tbody></table>
              </form>
              {alreadyuse && <p>Email already in use</p>}
              <Link to="/login">Already Have an account? Login Here</Link>
              {redirect && <Link id="successfull" to="/">Successfully Registered! <span id="link">Click Here</span> to Go to Homepage</Link>}
              
              <footer className="Home__foot">Created by: Nobin Johnson, Rahul Noronha and Jagadeeswar
                <div>&copy;2021</div>
                </footer>
          </div>
          </Route>
          
          <Route exact path="/">
            <Home />
            <div id="username">
              <h6>{email}</h6>
            </div>  
          </Route>
          <Route path="/login">
          <div className="Signup">
            <h1 className="sl"> LOGIN</h1><br/>
            <div style={{marginRight:0,color:"blue"}}><Button style={{backgroundColor:"lightgray"}}><Link  to="/">Home</Link></Button></div>
            <form onSubmit={submitLogin}>
            <table>
                <tbody>
              <tr><td><label>Please Enter your Email</label></td></tr>
              <tr> <td><input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input></td></tr>
              <tr> <td><label>Please Enter your Password</label></td></tr>
              <tr><td>  <input type="password"  minlength="8" required value={password} onChange={(e)=>setPassword(e.target.value)}></input></td></tr>
              <tr><td><button type="submit" >Login</button></td></tr>
                </tbody>
                </table>
              </form>
              {wrong && <p>Incorrect Email ID or password</p>}
              <Link to="/signup">Dont have an Account? Registered Here</Link>
              {redirect && <Link to="/">Successfully Logged In! <span id="link">Click Here</span> to Go to Homepage</Link>}
                <footer className="Home__foot">Created by: Nobin Johnson, Rahul Noronha and Jagadeeswar
                <div>&copy;2021</div>
                </footer>
          </div>
          </Route>

         
      </Switch>
      </div>
    </Router>
  );
}

export default App;
