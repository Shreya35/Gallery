import React,{Component} from "react"
import {withRouter} from "react-router-dom"
import './titleBasedImages.css'

class ArrayOfImages extends Component{
    constructor(props){
        super(props);
        this.state={
            noOfTimes:[1,2,3]
        }
    }
    imageClick=()=>{
        console.log("<<<clicked");
        this.props.history.push("/test2")
    }
   render(){
       return (
        <>
          <div>
          <div>
              <img src="/horizontal.png" className="horizontalIcon"/>
          </div>
          {this.state.noOfTimes.map((no,index)=>{
              return (
                <div className="imagesWrapper">
                <img src="/image1.jpg" style={{width:"25%",cursor:"pointer"}} onClick={this.imageClick}/>
                <img src="/image4.jpg" style={{width:"25%",cursor:"pointer"}} onClick={this.imageClick}/>
                <img src="/image5.jpg" style={{width:"25%",cursor:"pointer"}} onClick={this.imageClick}/>
        </div>
              )
          })}

          </div>
          
        
         
        </>
       )
   }
}
export default withRouter(ArrayOfImages)