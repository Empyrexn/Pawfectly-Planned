import React, { useState, useEffect } from 'react';
import DrawGraphic from '../basicComponents/DrawGraphic';
import { useAchievementContext } from '../Context/AchievementContext';
import AchievementList from '../basicComponents/AchievementList';
function Achievements() {

  const {Achievement, updateAchievements} = useAchievementContext();
  const {daily,lifeTime} = Achievement;
  //create switch file for daily and lifetime achievements to print them
  return (
    <div style={{backgroundColor:"#FFF4E2", width:"100%", height:"100%", overflow:'none'}}><h1>
      Achievements
      </h1>
      <div>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ fontWeight: 'bold', fontSize: '50px', textAlign: 'left', paddingLeft:'4%' }}></div>
 
<DrawGraphic val = {Achievement}/>
Box to be drawn after information flow
</div>


  
      <div style={{ overflowY: 'auto', whiteSpace: 'nowrap', marginLeft:'3%', position:'absolute',  width: '20%', height:'50%', left:'20%', top:'50%', marginBottom:'4%', borderRadius:'20px',  backgroundColor:'#FEDCAC', 'msOverflowStyle': 'none', /* IE and Edge */
'scrollbarWidth': 'none', /* Firefox */
'WebkitOverflowScrolling': 'touch'}}>
        <div style={{textAlign:'left', paddingLeft:'2%', paddingTop:'2%'}}>
      <div style={{fontWeight:'bold',fontSize:'20px', paddingLeft:'10%'}}>Daily achievements</div>
      </div>
      <div style={{paddingLeft:"15%"}}>
      <AchievementList list={daily}/>
       </div>
       </div>
       <div style={{ overflowY: 'auto', whiteSpace: 'nowrap', position:'absolute',  width: '20%', height:'50%', left:'60%', top:'50%',   marginBottom:'4%',marginLeft:'3%',borderRadius:'20px', backgroundColor:'#FEDCAC', 'msOverflowStyle': 'none', /* IE and Edge */
'scrollbarWidth': 'none', /* Firefox */
'WebkitOverflowScrolling': 'touch' }}>
       <div style={{textAlign:'left', paddingLeft:'2%', paddingTop:'2%'}}>
      <div  style={{fontWeight:'bold', fontSize:'20px', paddingLeft:'30%'}}>Life Time</div>
      </div>
      <div style={{paddingLeft:"23%"}}>
            <AchievementList list={lifeTime}/>
              </div>
          </div>
          </div>
          </div>
  

  )
}

export default Achievements