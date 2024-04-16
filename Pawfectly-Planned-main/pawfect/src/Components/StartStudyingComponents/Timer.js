
import { useState, useEffect } from 'react';
import React from 'react';
import { useTimer } from 'react-timer-hook';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faRedo  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCog } from '@fortawesome/free-regular-svg-icons';
import { useTimerContext } from '../Context/TimerHolder';
import { usePageContext } from '../Context/RenderPage1';

function MyTimer({ expiryTimestamp }) {
  const [settings, updateSettings] = useState(false)
  const [highlight, updateCurrentHighlight] = useState(0)
  const  {CurrPage}  = usePageContext();
  const  {currTimer, updateCurrTImer}  = useTimerContext();
  const [modifyTime, updateModifyTime] = useState(300)
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () =>{
    updateCurrentHighlight(highlight+1) // change whats highlighted
    const time = new Date();
    time.setSeconds(time.getSeconds() + modifyTime); // on timer end start new timer of 15 seconds
    restart(time);
  } , autoStart: false });
// use context and point to update visual

  useEffect(() => {
    updateCurrTImer(currTimer+1);

}, [totalSeconds ]);
  const Increase = ()  => {
    updateModifyTime(modifyTime + 300)
    const time = new Date();
    
    time.setSeconds(time.getSeconds() +modifyTime+300); // react hooks are queued so 300 is added to each to keep track for next time
    restart(time)
  }
  const Decrease = ()  => {
    const time = new Date();
    if(modifyTime<300){
      updateModifyTime(300)
      time.setSeconds(time.getSeconds() +300);
      restart(time)
    }
    else{
    updateModifyTime(modifyTime - 300)
   
        time.setSeconds(time.getSeconds() + modifyTime-300);
        restart(time)
    }
  }


  //console.log(currTimer)
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
//   <p>{isRunning ? 'Running' : 'Not running'}</p>
  return (
    <div style={{ textAlign: 'center' }}>
<div style={{ display: 'flex', gap: '0', marginTop:'-5%', padding:'0', borderTopLeftRadius:'30px',borderTopRightRadius:'30px'}}>
  <p style={{ position:'relative', backgroundColor:'#FEDCAC', left:'-5%',  borderTopLeftRadius:'30px',borderTopRightRadius:'30px' , top:"3%", height:'25%',flex:'1', width:"100%", color: highlight%3 === 0 ? ' black' : 'gray', padding:"0", margin:'0'}} className='topButton'>Focus</p>
  <p style={{ position:'relative',backgroundColor:'#FEDCAC',  left:'0',  borderTopLeftRadius:'30px',borderTopRightRadius:'30px' ,top:"3%",height:'25%',flex:'1', width:"100%",marginLeft:"-5%",marginRight:'-5%', color: highlight%3 === 1 ? ' black' : 'gray', padding:"0"}} className='topButton'>Break</p>
  <p style={{position:'relative', backgroundColor:'#FEDCAC', right:'-5%', borderTopLeftRadius:'30px',borderTopRightRadius:'30px' ,top:"3%", height:'25%',flex:'1', width:"120%",color: highlight%3 === 2 ? ' black' : 'gray',  padding:"0", margin:'0'}} className='topButton'>Rest</p>
</div>

        
      <div style={{fontSize:'50px', fontWeight:'bold', textAlign:'left' }}>
    
      <span style={{position:'absolute',left:'5%', top:"27%"}} >{formattedMinutes}</span><span style={{position:'absolute',left:'20%', top:"27%"}}>:{formattedSeconds}</span>
      <button onClick={isRunning ? pause : resume} style={{position:'absolute', left:'40%', top:'35%', borderRadius:'5px', fontSize:'60%', backgroundColor:'#FEC574', marginLeft:'3%', borderColor:'#FEC573', width:'40%', fontWeight:"bold"}}>{isRunning ?'Stop' : 'Start' }</button>
      </div>
   
      <div style={{position:"absolute", right:'5%', bottom:'40%'}}>   
      <button onClick={() => updateSettings(!settings)} style={{backgroundColor:'#FEDCAC', border:"none"}}>
      <FontAwesomeIcon icon={faRedo} style={{ fontSize:"30px", backgroundColor:'#FEDCAC', color:"#FEC574"}}/>

      </button>
      </div>
      <div style={{position:"absolute", right:'5%', bottom:'5%'}}>   
      <button onClick={() => updateSettings(!settings)} style={{backgroundColor:'#FEDCAC', border:"none"}}>
      <FontAwesomeIcon icon={faCog} style={{ fontSize:"30px", backgroundColor:'#FEDCAC', color:"#FEC574"}}/>

      </button>
      
      {settings && <div>

      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={() => {
        // Restarts to a 5-minute timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + modifyTime);
        restart(time);
      }}>Restart</button>

      </div>
    }
    </div>

    </div>
  );
}

export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
