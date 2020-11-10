import React,{Component} from "react";
import "./singleImageInfo.css"

class ImageInfo extends Component{
  render(){
      return (
          <>
          <div className="wrapper">
              <div className="division1Wrapper">
                <div>
                    <img src="/home.jpg" className="iconStyle"/>
                </div>
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
                 <div className="division2SubWrapper">
                     <h3>Category</h3>
                     <h3>Item Name</h3>
                 </div>
                 <div className="division2ImgWrapper">
                     <img src="/image1.jpg" style={{width:"60%",cursor:"pointer"}}/>
                 </div>
              </div>
              <div className="division3Wrapper">
                 <div className="rightIconWrapper">
                     <img src="/horizontal.png" className="horizontalStyle"/>
                 </div>
              </div>
          </div>
          </>
      )
  }
}
export default ImageInfo;