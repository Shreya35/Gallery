import React,{Component} from "react";
import './Sample.css'

class Sample extends Component{
   constructor(props){
       super(props);
       this.state={}
   }
   render(){
       return (
           <>
           <div className="headerWrapper">
               <div className="leftWrap">
                   <div>
                       <img src="/home.jpg" className="iconStyle"/>
                   </div>
                   <div className="headerCat">
                     <h3>Category</h3>
                     <h3 style={{marginLeft:"33px"}}>Item Name</h3>
                   </div>

               </div>
               <div className="rightWrap">
                    <img src="/horizontal.png" className="moreOptionsStyle"/>
               </div>

           </div>
           </>
       )
   }
}
export default Sample