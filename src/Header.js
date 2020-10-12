import React,{Component} from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }
    render() {
        return (
           <div className="header fixed">
               <a href="#" className="logo abs anim">
               <img src="/icon.png" className="abs"/>
               </a>
               <div className="searchbox abs">
                 <input type="text" value="" placeholder="search" className="query bl s15"/>
                 <button className="send abs">
                     <img src="/search.png" className="searchIcon"/>
                 </button>
               </div>
                 <ul className="nav ibl abs">
                   <li>
                       <a href="#" className="s15 noul">
                           Home
                       </a>
                   </li>
                   <li>
                       <a href="#" className="s15 noul">
                           Following
                       </a>
                   </li>
                  
                   <li>
                       <a href="#" className="s15 noul">
                         <img src="/message.png" className="messageIcon"/>    
                       </a>
                   </li>
                   <li>
                       <a href="#" className="s15 noul">
                         <img src="/notification.png" className="notifyIcon"/>
                       </a>
                   </li>
                   <li>
                       <a href="#" className="s15 noul">
                        <img src="/dotted.png" className="dottedIcon"/>
                       </a>
                   </li>
                 </ul>
           </div>
        )
    }
}
export default Header