import React,{Component} from "react";
import {withRouter} from "react-router-dom";
import Header from "./Header1"
import "./singleImageInfo.css"

class ImageInfo extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    onLogoClick=()=>{
        this.props.history.push("/test")
    }
    onGalleryClick=()=>{
      this.props.history.push("/test")
    }
    onListItemClick=()=>{
       this.props.history.push("/test1")
    }
  render(){
      return (
          <>
          <Header/>
          <div className="singleHeadingWrapper">
              <ul className="unordSingleHeadingWrapper">
                  <li className="liSingleHeadingWrapper" onClick={this.onGalleryClick}>
                      Gallery
                  </li>
      <span>{">>"}</span>
                  <li className="liSingleHeadingWrapper" onClick={this.onListItemClick}>
                      ItemList
                  </li>
                  <span>{">>"}</span>
                  <li className="liSingleHeadingWrapper">
                      360
                  </li>
              </ul>
          </div>
          <div className="wrapper">
              <div className="division1Wrapper">
                {/* <div>
                    <img src="/home.jpg" className="iconStyle" onClick={this.onLogoClick} style={{cursor:"pointer"}}/>
                </div> */}
                <div className="divsion1Text1">
                    Last Audited 26-FEB-2018
                </div>
                <div className="divsion1Text1">
                   Last Serviced 12-FEB-2018
                </div>
                <div className="divisionText3">
                    Not Ready
                </div>
              </div>
              <div className="division2Wrapper">
                 {/* <div className="division2SubWrapper">
                     <h3>Category</h3>
                     <h3>Item Name</h3>
                 </div> */}
                 <div className="division2ImgWrapper">
                     <img src="/image1.jpg" style={{width:"60%",cursor:"pointer"}}/>
                 </div>
              </div>
              <div className="division3Wrapper">
                 {/* <div className="rightIconWrapper">
                     <img src="/horizontal.png" className="horizontalStyle"/>
                 </div> */}
                 {/* <div>
                     Audit History
                 </div>
                 <div>
                     Action Items
                 </div> */}
              </div>
          </div>
          </>
      )
  }
}
export default withRouter(ImageInfo);