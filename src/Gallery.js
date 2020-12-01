import React, { Component } from "react";
import {withRouter} from "react-router-dom"
import './App.css'


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state={
            isHovering: false

        }
    }
    
  handleMouseHover=()=> {
      this.setState({isHovering: !this.state.isHovering})
  }

   onImageHover=()=>{
     if(this.state.isHovering) {
       return(
        <div className="saveImage">
        Save
      </div>
       )
      
     }
   }
   onImageHoverDownloadOption=()=>{
     if(this.state.isHovering) {
      return (
        <div className="wrapperBottomContent">
          <img src="/dotted.png" className="downloadImage"/>
          <img src="/download.png" alt="download" className="downloadImage"/>
        </div>
      )
     }
   }
   onImageHoverAuthorOption=()=>{
     if(this.state.isHovering) {
       return (
         <div className="authorWrapper">
           <img src="/author.jpg" className="authorStyleImg"/>
           <h3 className="authorStyle">Raghav Sharma</h3>
         </div>
       )
     }
   }
   imageClick=()=>{
     this.props.history.push('/test1')
   }
  render() {
    return (
      
         <React.Fragment>
           <div>
           <div className={this.state.isHovering?"galleryWrapperonHover":"galleryWrapper"} onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}>
             <h4 className="headingWrapper">Clothes</h4>
             <img src={`${this.props.imgName}.jpg`} className="imageInGallery" alt="cat" onClick={this.imageClick} />
          
           {/* {this.onImageHover()}
             {this.onImageHoverDownloadOption()}
             {this.onImageHoverAuthorOption()} */}
        </div>
           </div>
       
         </React.Fragment>
        
    );
  }
}
export default withRouter(Gallery)