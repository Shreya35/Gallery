import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import Gallery from "./Gallery"
// import Header from "./Header"
import './App.css'
import Header from "./Header1"


class Demo extends Component {
    constructor(props) {
        super(props);
        this.state={
            images: ["image1","image2","image3","image4","image5","image6","image7","image8","image9"]
           
        }
    }
    
componentDidMount=()=>{
    window.addEventListener('scroll', this.handleScroll);
}



handleClick=()=>{
    console.log('add+++++');
    this.setState({images: [...this.state.images,"image1","image2","image3","image4","image5","image6","image7","image8","image9","image10","image11","image12","image13","image14","image15",
    "image1","image2","image3","image4","image5","image6","image7","image8"]})
   
}
handleScroll=(e)=>{
    if(!this.pending) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-80) {
            console.log("<<<scroll working")
            this.setState({images: [...this.state.images,"image15",
             "image1","image2","image3","image4","image5","image6","image7","image8"]})
             this.pending=true;
             setTimeout(()=>{this.pending=false},100)
         }
    }
}

  render() {
    return (
        <>
        <div className="parentCont">
        <Header/>
        <div className="galHeader">
            Gallery
        </div>
    <div classNme="gridWrapper">
    <StackGrid
     columnWidth={400}
      className="wrapper"
     >
    {this.state.images.map((item,index)=>{
     return <Gallery imgName={item}/>
           
    })} 


</StackGrid >
{/* <div className="addMoreImagesWrapper">
    <img src="/plus.png" alt="Add" className="addMoreImages" onClick={this.handleClick}/> 
</div> */}
    </div>
        </div>
          
  
        </>
      
    );
  }
}
export default Demo