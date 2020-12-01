import React,{Component} from "react";
import {withRouter} from "react-router-dom"
import "./PeiskharDash.css"

class PeiskharDash extends Component{
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
           <div className="dashWrapper">Peiskhar Dashboard</div>

           <div className="peiskharWrapper1">
              <div className="box1Wrapper">
                  {/* <div className="textWrapper">
                      Donation
                  </div> */}
                <div className="leftDash1">
                   <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Donation Received</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">5</td>
              </tr>
                   </table>
                </div>
                <div className="rightDash1">
                <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Peiskhar update to Master</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">10</td>
              </tr>
                   </table>
                </div>
              </div>
              <div className="box1Wrapper">
              <div className="leftDash1">
                   <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Treasury update to Peiskhar</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">10</td>
              </tr>
                   </table>
                </div>
                <div className="rightDash1">
                <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Items to Treasury</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">20</td>
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
                    <th className="th1Wrapper">Peiskhar Change Date</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">05 <span style={{fontSize:"25px"}}>Jan</span></td>
              </tr>
                   </table>
                </div>
                <div className="rightDash1">
                <table className="tableWrap">
                   <tr className="tr1Wrapper">
                    <th className="th1Wrapper">Action Items to current Peiskhar</th>
                         </tr>
                <tr className="tr2Wrapper">
                  <td className="td1Wrapper">2</td>
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

export default withRouter(PeiskharDash)