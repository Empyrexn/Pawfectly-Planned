import React from 'react'
import background from '../../Assets/NewPetSpace.png'
function BuddyMain() {
  return (
    <div>
  
   <div style={{width:"100%", height:"60%", position:"absolute", top:0, backgroundColor:"#FFE8EC"}}>

   </div>
   <div  style={{width:"100%", height:"45%", position:"absolute", bottom:-10, backgroundColor:"#FFC8CC"}}>
    
    </div>
    <div style={{backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", width:'85%', height:'98%', position:'absolute', bottom:0, flex:1, marginLeft:'1%'}}>
      
    <h1>Welcome to Buddys home</h1>
      </div>
      </div>
  )
}

export default BuddyMain