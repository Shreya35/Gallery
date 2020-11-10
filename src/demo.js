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
            images: ["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10","image11","image12","image13","image14","image15",
            "image1","image2","image3","image4","image5","image6","image7","image8","image9","image10","image11","image12","image13","image14","image15"]
           
        }
    }
    

handleClick=()=>{
    console.log('add+++++');
    this.setState({images: [...this.state.images,"image1","image2","image3","image4","image5","image6","image7","image8","image9","image10","image11","image12","image13","image14","image15",
    "image1","image2","image3","image4","image5","image6","image7","image8"]})
   
}

  render() {
    return (
        <>
        <div className="parentCont">
        <Header/>
    <div classNme="gridWrapper">
    <StackGrid
     columnWidth={400}
      className="wrapper"
     >
    {this.state.images.map((item,index)=>{
        console.log('<<item',item)
     return <Gallery imgName={item}/>
           
    })} 


</StackGrid>
<div className="addMoreImagesWrapper">
    <img src="/plus.png" alt="Add" className="addMoreImages" onClick={this.handleClick}/> 
</div>
    </div>
        </div>
          
  
        </>
      
    );
  }
}
export default Demo