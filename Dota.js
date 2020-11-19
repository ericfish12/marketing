import React from 'react'
import allHeros from './public/data.json'


export default class Dota extends React.Component {
  constructor(){
super()
this.state= {
  heros:[],
  try:0

}

  }
 async componentDidMount() {
  const array =await fetch("data.json")
const heros =await array.json()
  this.setState({heros:heros})
  //console.log("********",allHeros)
  }
 
  
  render() {
    const heros = this.state.heros
    // this.setState({try:1})
    
    // console.log(this.state.try,'*******')
    if(!heros.length)
    return(<div>2</div>)
    else
    return(
     
      <div className = 'container'>
     
{heros.map((hero,index)=>{
   if (index<=4)
  return(
<div className ='child' key = {index} >
<button>3333</button>
<div>
<img width={203.3} height={150} src={hero} name = {index} id ={index}/>
<br/>
<div className = 'daddy'>dwgwerjretjetrherh</div>

</div>

</div>


  )
}


)
}

      </div>
    )
    

  }
}


