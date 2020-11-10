import React,{Component} from "react"
import axios from "axios"
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
      isRoleError: false
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
    }
   
  }
  handleChange=(event)=>{
       const value = event.target.value
      this.setState({[event.target.name]:value})
  }
  validationEmailHandle=()=>{
    if(this.state.isEmailError) {
      return <span style={{color:"red"}}>Email is required</span>
    }
   
    else if(this.state.isRoleError) {
      return <span style={{color:"red"}}>Role is required</span>
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
    console.log("email",this.state.email);
    console.log("password",this.state.password);
    console.log("role",this.state.role)
   
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
                     <input type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
                     {this.validationEmailHandle()}
                   </div>
                   <div className="formGroup">
                     <div style={{position:"relative"}}>
                      <label htmlFor="password" style={{position:"absolute"}}>Password</label>
                     </div>
                     <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                     {this.validationPasswordHandle()}
                   </div>
                   <div className="formGroup">
                     <div style={{position:"relative"}}>
                      <label htmlFor="role" style={{position:"absolute"}}>Role</label>
                     </div>
                     <input type="text" name="role" placeholder="Role" onChange={this.handleChange}/>
                     {this.validationRoleHandle()}
                   </div>
                 </div>
                   
                     <div className="btnWrapper">
                     <button onClick={this.onLoginClick}>Login</button>
                     </div>

                </div> 
                
              </div>

          </>
      )
  }
}
export default Login