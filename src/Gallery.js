import React, { Component } from "react";
import './App.css'


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state={
            isHovering: false

        }
    }
    
  handleMouseHover=()=> {
      console.log('method called')
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
          {/* <img src="/dotted.png" className="downloadImage"/> */}
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
  render() {
    console.log('this.props',this.props)
    return (
      
         <React.Fragment>
           <div className={this.state.isHovering?"galleryWrapperonHover":"galleryWrapper"} onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}>
            <img src={`${this.props.imgName}.jpg`} className="imageInGallery" alt="cat" />
          
           {this.onImageHover()}
             {this.onImageHoverDownloadOption()}
             {this.onImageHoverAuthorOption()}
        </div>
         </React.Fragment>
        
    );
  }
}
export default Gallery