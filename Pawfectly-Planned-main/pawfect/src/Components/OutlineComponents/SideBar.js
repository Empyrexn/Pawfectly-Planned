import React from 'react'
import { usePageContext } from '../Context/RenderPage1'

import Calendar from '../../Assets/calendar-clock-icon.png'

import DogHouse from '../../Assets/doghouse.png'
import HeadPhones from '../../Assets/headphones.png'
import pomadora from '../../Assets/pomodoro toolbar.png'
import postIts from '../../Assets/post-its.png'
import target from '../../Assets/target toolbar.png'
import StopWatch from '../../Assets/yellow_stopwatch toolbar.png'
import profilePic from '../../Assets/Profile Picture.png'
function SideBar() {
  const {setCurrPage} = usePageContext();
  return (
    <div>
        <div className='SideBar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , }}> 
        <div className='SideBarBox' style={{ top: '2%', left: '2%',}}>

          <button onClick={() => setCurrPage(3)} className='image-button'> 

          <img src={profilePic} alt="profilePic"  className='ImageButton'/>
          </button>
          </div>
          <div className='SideBarBox' style={{ top: '14%', left: '2%',}}>

          <button onClick={() => setCurrPage(8)} className='image-button'> 
          <img src={Calendar} alt="Calendar"  className='ImageButton'/>

          </button>
          </div>
          <div className='SideBarBox' style={{ top: '26%', left: '2%',}}>
          <button onClick={() => setCurrPage(4)} className='image-button'> 
          <img src={postIts} alt="postIts" className='ImageButton' />
          </button>
        </div>
        <div className='SideBarBox' style={{ top: '38%', left: '2%',}}>
        <button onClick={() => setCurrPage(5)} className='image-button'> 
        <img src={StopWatch} alt="clock" className='ImageButton' />
        </button>
        </div>
        <div className='SideBarBox' style={{ top: '50%', left: '2%',}}>
        <button onClick={() => setCurrPage(6)} className='image-button'> 
        <img src={pomadora} alt="pomadora" className='ImageButton' />
        </button>
        </div>
        <div className='SideBarBox' style={{ top: '62%', left: '2%',}}>
        <button onClick={() => setCurrPage(7)} className='image-button'> 
        <img src={target} alt="target" className='ImageButton' />
        </button>
        </div>
        <div className='SideBarBox' style={{ top: '74%', left: '2%',}}>

        <button onClick={() => setCurrPage(9)} className='image-button'> 

        <img src={DogHouse} alt="DogHouse" className='ImageButton' />
        </button>
        </div>
        <div className='SideBarBox' style={{ top: '86%', left: '2%',}}>

        <button onClick={() => setCurrPage(10)} className='image-button'> 

        <img src={HeadPhones} alt="HeadPhones" className='ImageButton' />
        </button>
        </div>
  
      
    
        </div>
    </div>
  )
}

export default SideBar