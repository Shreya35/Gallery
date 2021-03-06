import React,{Component} from "react";
import "./PeiskharDash.css"

class InventoryDash extends Component{
   constructor(props) {
       super(props);
       this.state={}
   }
   galleryClick=()=>{
    this.props.history.push('/test')
}
preferredClick=()=>{
    this.props.history.push('/preference')
}
   render(){
       return (
           <>
           <div className="peiskharWrapper">
           <div className="dashWrapper">Inventory Dashboard</div>
           <div className="peiskharWrapper1">
              <div className="box1Wrapper">
                <div className="leftDash1">
                   <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Peiskhar Received</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">5</td>
              </tr>
                   </table>
                </div>
                <div className="rightDash1">
                <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Inventory update pending</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">5</td>
              </tr>
                   </table>
                </div>
              </div>
              <div className="box1Wrapper">
              <div className="leftDash1">
                   <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Under modification</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">10</td>
              </tr>
                   </table>
                </div>
                <div className="rightDash1">
                <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Inventory update pending</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">7</td>
              </tr>
                   </table>
                </div>
              </div>
              
           </div>
           <div className="peiskharWrapper2">
           <div className="box1Wrapper">
           <div className="leftDash1">
                   <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Damage Reported</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">3</td>
              </tr>
                   </table>
                </div>
                <div className="rightDash1">
                <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Damage Assessed</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">2</td>
              </tr>
                   </table>
                </div>
                </div>
                <div className="box1Wrapper">
                <div className="leftDash1">
                   <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Transfer to Treasury</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">4</td>
              </tr>
                   </table>
                </div>
                <div className="rightDash1">
                <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Inventory update pending</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">4</td>
              </tr>
                   </table>
                </div>
                </div>
           </div>
           </div>
           <div className="btnWrapperDashboard">
               <button className="btnDashStyle" onClick={this.galleryClick}>Go to Image Gallery</button>
               <button className="btnDashStyle" onClick={this.preferredClick}>Go to Preferred View</button>
           </div>
 
           </>
       )
   }
}

export default InventoryDash