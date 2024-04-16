import React from 'react'
import Timer from '../StartStudyingComponents/Timer'
import pomadora from '../../Assets/pomodoro toolbar.png'
function TimerPageMain() {
  return (
    <div style={{flex:'1'}}>
           <div style={{ position: 'absolute', top: '30%', right: '30%', width: '25%', height: '20%', borderRadius:30, backgroundColor: '#FEDCAC' }} className='Overflow'>
          <div style={{margin:"5%"}}>
            <Timer />
            </div>
            <div className='SideBarBox' style={{ bottom: '10%', left: '10%',}}>


        <button onClick={() => ""} className='image-button'> 
        <img src={pomadora} alt="pomadora" className='ImageButton' />
        </button>
        </div>
        <div className='SideBarBox' style={{ bottom: '10%', left: '20%',}}>
        <button onClick={() => ""} className='image-button'> 
        <img src={pomadora} alt="pomadora" className='ImageButton' />
        </button>
        </div>
          </div>
    </div>
  )
}

export default TimerPageMain