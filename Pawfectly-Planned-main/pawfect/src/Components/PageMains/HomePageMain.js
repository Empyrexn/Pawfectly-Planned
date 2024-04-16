import React from 'react';
import YourSchedule from '../MainPageComponents/YourSchedule';
import BulletinBoard from '../MainPageComponents/BulletinBoard';
import fullDog from "../../Assets/PetSpace.png"
import stopwatch from "../../Assets/yellow_stopwatch toolbar.png"
import target from "../../Assets/target toolbar.png"
import tomatoe from "../../Assets/pomodoro toolbar.png"
import ProfilePic from "../../Assets/Profile Picture.png"
//#FFC0CB light pink 
function HomePageMain() {

return (
<div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor:'rgb(254, 220, 172,0.4)'}}>

  <div style={{ display: 'flex', flex: 1 }}>
    <div style={{ flex: 1, position: 'relative' }}>
    <h1 style={{ textAlign: "left", paddingTop:'2%', paddingLeft:'2%'}}>Hello Nick!!</h1>
    <div style={{position: 'absolute', top:'1%', right: '1%', width: '6%', height: '10%', backgroundImage: `url(${ProfilePic})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        </div>
      <div style={{ position: 'absolute', top: "5%", left: '2%', width: '52%', height: '35%', borderRadius:50, backgroundColor: 'rgb(254, 220, 172,0.5)', marginTop:'5%',  overflow: 'auto', // or 'scroll'
'msOverflowStyle': 'none', /* IE and Edge */
'scrollbarWidth': 'none', /* Firefox */
'WebkitOverflowScrolling': 'touch' /* iOS Safari */}}>
  
      
      <YourSchedule View={"dayGridWeek"}/>
      
      </div>
      <div style={{ position: 'absolute', top: "5%", right: 0, width: '45%', height: '35%',borderRadius:50, backgroundColor: 'rgb(254, 220, 172,0.5)' , marginTop:'5%' }}>
        <h2 style={{textAlign:'left', margin:'3%'}}>Bulletin Board</h2>
      <div style={{ position: 'absolute', bottom: '7%', left: '7%', width: '40%', height: '65%', backgroundColor: '#FFC0CB',  boxShadow: '0px 5px 7px rgba(0, 0, 0, 0.4)' }}>
        <BulletinBoard />
      </div>
      <div style={{ position: 'absolute', bottom: '7%', right:'7%', width: '40%', height: '65%', backgroundColor: '#FFC0CB',   boxShadow: '0px 5px 7px rgba(0, 0, 0, 0.4)' }}>
        <BulletinBoard />
      </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: '2%', width: '52%', height: '38%',borderRadius:50,  backgroundColor: 'rgb(254, 220, 172,0.5)', marginBottom:'5%'}}>
      <div style={{ position: 'absolute', top: '20%', left: '7%', width: '25%', height: '55%', borderRadius:30, backgroundColor: '#ADD8E6', }}>
      <button className='image-button'> 
      <img src={stopwatch} alt="postIts" className='ImageButton' />
      Stop watch/ time Clock
      </button>
      </div>
      <div style={{ position: 'absolute', top: '20%', left: '38%', width: '25%', height: '55%', borderRadius:30, backgroundColor: '#FFC0CB', }}> 
      <button className='image-button' style={{    display: 'flex',  flexDirection: 'column',  alignItems: 'center', padding:"12%", paddingLeft:"18%"}}> 
      <img src={tomatoe} alt="postIts" className='ImageButton' style={{width:"125%", height:"125%", flex:1}}/>
      Pomodero timer
      </button>
      </div>
      <div style={{ position: 'absolute', top: '20%', left: '68%', width: '25%', height: '55%', borderRadius:30, backgroundColor: 'White', }}>
      <button className='image-button' style={{    display: 'flex',  flexDirection: 'column',  alignItems: 'center', padding:"6%", paddingLeft:"22%"}}> 
      <img src={target} alt="postIts" className='ImageButton' style={{width:"150%", height:"150%", flex:1}} />
      Study sets
      </button>
      </div>
      </div>

      <div style={{position: 'absolute', bottom:0, right: 0, width: '48%', height: '51%', backgroundImage: `url(${fullDog})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        </div>
  
    </div>
  </div>
</div>
);

}

export default HomePageMain;
