import React,{Component} from "react";
import "./PeiskharDash.css"

class DyDash extends Component{
   constructor(props) {
       super(props);
       this.state={

       }
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
           <div className="dashWrapper">Dy.EO Dashboard</div>
           <div className="peiskharWrapper1">
              <div className="box1Wrapper">
                <div className="leftDash1">
                   <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Regular</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">5</td>
              </tr>
                   </table>
                </div>
                <div className="rightDash1">
                <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Damages</th>
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
                    <th className="th1Wrapper">New Peiskhar</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">Initiate</td>
              </tr>
                   </table>
                </div>
                <div className="rightDash1">
                <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Updates from Current Peiskhar</th>
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
                    <th className="th1Wrapper">Reported</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">4</td>
              </tr>
                   </table>
                </div>
                <div className="rightDash1">
                <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Need Remedy</th>
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

export default DyDash