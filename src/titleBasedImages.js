import React,{Component} from "react"
import {withRouter} from "react-router-dom"
import Header from "./Header1"
import './titleBasedImages.css'

class ArrayOfImages extends Component{
    constructor(props){
        super(props);
        this.state={
            noOfTimes:[1,2,3],
            images:["image1","image4","image5"]
        }
    }
    componentDidMount=()=>{
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll=(e)=>{
    
        if(!this.pending) {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-80) {
                console.log("<<<scroll working")
                this.setState({images: [...this.state.images,"image1",
                 "image4","image5","image1","image4","image5","image1","image4","image5"]})
                 this.pending=true;
                 setTimeout(()=>{this.pending=false},100)
             }
        }
    }
    imageClick=()=>{
        console.log("<<<clicked");
        this.props.history.push("/test2")
    }
    onGalleryClick=()=>{
        this.props.history.push("/test")
    }
   render(){
       return (
        <>
          <div>
          <div>
              {/* <img src="/horizontal.png" className="horizontalIcon"/> */}
              <Header/>
          </div>
          <div className="itemListHeader">
             <ul className="unordItemListHeader">
                 <li onClick={this.onGalleryClick} style={{cursor:"pointer"}}>Gallery</li>
       <span>{">>"}</span>
                <li style={{cursor:"pointer"}}>ItemList</li>
   
             </ul>
          </div>
          {this.state.images.map((no,index)=>{
              return (
                <div className="imagesWrapper">
                <img src={`${no}.jpg`} style={{width:"25%",cursor:"pointer"}} onClick={this.imageClick}/>
                <img src={`${no}.jpg`} style={{width:"25%",cursor:"pointer"}} onClick={this.imageClick}/>
                <img src={`${no}.jpg`} style={{width:"25%",cursor:"pointer"}} onClick={this.imageClick}/>
        </div>
              )
          })}

          </div>
          
        
         
        </>
       )
   }
}
export default withRouter(ArrayOfImages)