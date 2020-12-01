import React,{Component} from "react";
import {withRouter} from "react-router-dom"

class Dummy extends Component{
    constructor(props){
        super(props);
        this.state={
          onMoreOptionsClick: false
        }
    }
    moreOptions=()=>{
        this.setState({onMoreOptionsClick:!this.state.onMoreOptionsClick})
    }
    onLogoutClick=()=>{
        this.props.history.push('/')
    }
    onPreferenceClick=()=>{
        this.props.history.push('/preference')
    }
    onHelpClick=()=>{
       this.props.history.push('/help')
    }
    render(){
       
        return(
            <>
             <div className="headerWrapper">
             <div className="leftWrapper">
                
               <div className="searchboxContainer">
                 <input type="text" placeholder="search" className="inputBoxStyle"/>
                 <button className="searchIconButton">
                     <img src="/search.png" className="searchIcon"/>
                 </button>
               </div>

            </div>
            <div className="rightWrapper">
            <ul className="ulWrapper">
                   <li>
                       <a href="#" className="noul">
                           Home
                       </a>
                   </li>
                  
                   <li>
                       <a href="#" className="noul">
                         <img src="/person-icon.png" className="messageIcon"/>    
                       </a>
                   </li>
                   <li>
                       <a href="#" className="noul" style={{position:"relative"}}>
                           <span className="notifyNo">9+</span>
                         <img src="/notification.png" className="notifyIcon"/>
                       </a>
                   </li>
                   <li>
                       {this.state.onMoreOptionsClick&&<div className="menuPopupWrapper">
                        <ul className="menuListPopUp">
                           <li className="itemPopUp" onClick={this.onPreferenceClick}>
                               Preference
                           </li>
                           <li className="itemPopUp" onClick={this.onHelpClick}>
                               Help
                           </li>
                           <li className="itemPopUp" onClick={this.onLogoutClick}>
                               Logout
                           </li>
                       </ul></div>}
                      
                       <a href="#" className="noul">
                        <img src="/dotted.png" className="dottedIcon" onClick={this.moreOptions}/>
                       </a>
                   </li>
                 </ul>
            </div>
             </div>
           
            </>
            
        )
    }
}
export default withRouter(Dummy)
