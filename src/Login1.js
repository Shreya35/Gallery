import React,{Component} from "react"
import axios from "axios"
import {withRouter} from "react-router-dom"
import "./login1.css"
// import "./login1.css"

class Login1 extends Component{
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: "",
            role: "Peiskhar",
            isEmailError: false,
            isPasswordError: false,
            isRoleError: false,
            validEmail: false
        }
    }
    // componentDidMount=()=>{
    //     document.documentElement.requestFullscreen()
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
   onLoginClick=(e)=>{
       e.preventDefault();
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
        console.log("length++++++++++")
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
      if(this.state.role==="Peiskhar") {
        this.props.history.push('/peiskhar')     
        }
        else if(this.state.role==="Inventory") {
            this.props.history.push('/inventory')
        }
        else if(this.state.role==="Auditor") {
            this.props.history.push('/audit')
        }
        else {
            this.props.history.push('/DyEo')
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
  render(){
      console.log("this.state.role",this.state.role)
      return (
          <>
                <div className="limiter" id="fullScrnActivate">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="/img-01.png" alt="IMG" />
            </div>
            <form className="login100-form validate-form">
              <span className="login100-form-title">
                Member Login
              </span>
              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email" onChange={this.handleChange} />
                {this.validationEmailHandle()}
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                {this.validationPasswordHandle()}
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <select className="input100" type="text" name="role" placeholder="Password" onChange={this.handleChange}>
                   <option selected value="Peiskhar">Peiskhar</option>
                   <option value="Inventory">Inventory</option>
                   <option value="Auditor">Auditor</option>
                   <option value="Dy.EO">Dy.EO</option>
                    </select>
                    {this.validationRoleHandle()}
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-user" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={this.onLoginClick}>
                  Login
                </button>
              </div>
              <div className="text-center p-t-12">
                <span className="txt1" style={{marginRight:"9px"}}>
                  Forgot
                </span>
                <a className="txt2" href="#">
                  Username / Password?
                </a>
              </div>
              {/* <div className="text-center p-t-136">
                <a className="txt2" href="#">
                  Create your Account
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
          </>
      )
  }
}

export default withRouter(Login1)