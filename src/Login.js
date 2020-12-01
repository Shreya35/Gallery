import React,{Component} from "react"
import axios from "axios"
import {withRouter} from "react-router-dom"
import "./Login.css"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      email: "",
      password: "",
      role: "",
      isEmailError: false,
      isPasswordError: false,
      isRoleError: false,
      validEmail: false
    }
  }
  onLoginClick=()=>{
    console.log('<<<clicked login');
    if(this.state.email.length<=0){
      this.setState({isEmailError:true})
    }
     if(this.state.password.length<=0){
      this.setState({isPasswordError:true})
    }
     if(this.state.role.length<=0){
      this.setState({isRoleError:true})
    }
    if(this.state.email.length>0&&this.state.password.length>0&&this.state.role.length>0) {
      axios.post("http://localhost:4000/book/createApi",{
        email: this.state.email,
        password: this.state.password,
        role: this.state.role
      })
      .then((response)=>{
        console.log("response from server +++",response)
      })
      .catch((error)=>{
          console.log("error from server ++++",error)
      })
      if(this.state.role==="test1"||this.state.role==="test2") {
        this.props.history.push('/test')
              
        }
        else {
          this.props.history.push('/test3')
        }
    }
   
   
  }
  // handleEmail=()=>{
  //   const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
  //   const result = pattern.test(email); 
  // }

  handleChange=(event)=>{
       const value = event.target.value
      this.setState({[event.target.name]:value})
      if(event.target.name==='email') {
        if(event.target.value===''|| event.target.value===null) {
          this.setState({isEmailError:true})
        }
        else {
          this.setState({isEmailError:false,email: event.target.value})
        }
      }
      if(event.target.name==='password') {
        if(event.target.value===''|| event.target.value===null) {
          this.setState({isPasswordError:true})
        }
        else {
          this.setState({isPasswordError: false, password: event.target.value})
        }
      }
      if(event.target.name==='role') {
        if(event.target.value===''|| event.target.value===null) {
          this.setState({isRoleError:true})
        }
        else {
          this.setState({isRoleError: false, role: event.target.value})
        }
      }
  }
  validationEmailHandle=()=>{
    if(this.state.isEmailError) {
      return <span style={{color:"red"}}>Email is required</span>
    }
   
  }
  validationPasswordHandle=()=>{
    if(this.state.isPasswordError) {
      return <span style={{color:"red"}}>Password is required</span>
    }
  }
  validationRoleHandle=()=>{
    if(this.state.isRoleError) {
      return <span style={{color:"red"}}>Role is required</span>
    }
  }

  render() {   
      return (
          <>
           <div className="loginWrapper">
                 <div>
                 <h2>Login</h2>
                 <div className="form">
                 <div className="formGroup">
                   <div style={{position:"relative"}}>
                    <label htmlFor="email" style={{position:"absolute"}}>Email</label>
                     </div>
                     <input type="text" name="email" placeholder="Email" onChange={this.handleChange} className="inputStyle"/>
                     {/* {this.validationEmailHandle()} */}
                   </div>
                   <div className="formGroup">
                     <div style={{position:"relative"}}>
                      <label htmlFor="password" style={{position:"absolute"}}>Password</label>
                     </div>
                     <input type="password" name="password" placeholder="Password" onChange={this.handleChange} className="inputStyle"/>
                     {/* {this.validationPasswordHandle()} */}
                   </div>
                   <div className="formGroup" style={{marginRight:"1px"}}>
                     <div style={{position:"relative"}}>
                      <label htmlFor="role" style={{position:"absolute"}}>Role</label>
                     </div>
                     {/* <input type="text" name="role" placeholder="Role" onChange={this.handleChange}/> */}
                     <select value={this.state.role} name="role" onChange={this.handleChange} className="selectStyle" style={{minWidth:"19em"}}>
            <option value="test1">test1</option>
            <option value="test2">test2</option>
            <option value="test3">test3</option>
            <option value="test4">test4</option>
          </select>
          {/* {this.validationRoleHandle()} */}
                   </div>
                 </div>
                   
                     <div className="btnWrapper">
                     <button onClick={this.onLoginClick} className="btnStyle">Login</button>
                     </div>

                </div> 
                
              </div>

          </>
      )
  }
}
export default withRouter(Login)