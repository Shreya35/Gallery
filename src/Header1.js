import React,{Component} from "react";

class Dummy extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    moreOptions=()=>{
        // console.log('<<<clicked')
    }
    render(){
       
        return(
            <>
             <div className="headerWrapper">
             <div className="leftWrapper">
                <div>
                  <a href="#">
                  <img src="/icon.png" className="iconStyle"/>
               </a>
                </div>
            
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
                           Following
                       </a>
                   </li>
                  
                   <li>
                       <a href="#" className="noul">
                         <img src="/message.png" className="messageIcon"/>    
                       </a>
                   </li>
                   <li>
                       <a href="#" className="noul" style={{position:"relative"}}>
                           <span className="notifyNo">9+</span>
                         <img src="/notification.png" className="notifyIcon"/>
                       </a>
                   </li>
                   <li>
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
export default Dummy
