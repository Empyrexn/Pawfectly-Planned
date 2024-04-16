import React from 'react'

import Music from '../StartStudyingComponents/Music'
import pomadora from '../../Assets/pomodoro toolbar.png'
import background from '../../Assets/room_background.png'
import Timer from '../StartStudyingComponents/Timer'

import ToDoList from '../MainPageComponents/ToDoList'
import useWindowWidth from '../Hooks/useWindowWidth'
import MovieClip from '../StartStudyingComponents/Youtube'
import SelectBackground from '../Selectors/BackgroundSelector'
import useBackgroundImage from '../Hooks/useBackgroundHook'
import useQuoteHook from '../Hooks/useQuoteHook'
function StartStudyingMain() {
    //    <div style={{backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", width:'85%', height:'98%', position:'absolute', bottom:0, flex:1, marginLeft:'5%'}}>
    const { backgroundImage1 } = useBackgroundImage();
    console.log(backgroundImage1)
  const {quote} = useQuoteHook();
  console.log(quote)
  return ( 

    <div  className='PageMain'style={{ opacity:'1',backgroundImage:`url(${SelectBackground(backgroundImage1)})`, backgroundRepeat:"no-repeat",   backgroundSize: 'cover',}}>


            <div style={{ display: 'flex', flex: '1 1 auto' }}>
        <div style={{ width: '30%', backgroundColor: '#FEDCAC', borderRadius:'20px', height:'8%', margin:'2%', padding:'3px', position:'absolute' }}> 
        <h1 style={{fontSize:40, fontWeight:'bolder'}}>Your Study Space</h1>
        </div>

        <div style={{ width: '30%', backgroundColor: '#FEC574', borderRadius:'20px', height:'8%', margin:'2%', padding:'8px', position:'absolute', top:'12%' }} className='Overflow'> 
        <p style={{fontSize:25, fontWeight:'bold', color:'white', textAlign:'left'}} className='Overflow'>{quote}</p>
        </div>
        <div style={{ flex: '6 1 auto', display: 'flex', flexDirection: 'column' }}> 
        <div style={{ position: 'absolute', top: '10%', right: '7%', width: '25%', height: '20%', borderRadius:30, backgroundColor: '#FEDCAC' }} className='Overflow'>
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

          <div style={{ position: 'absolute', top: '35%', right: '7%', width: '25%', height: '25%', borderRadius:'30px', backgroundColor: '#FEDCAC', }}>
            <div style={{position:'absolute',  backgroundColor:'#FEC574',width:'100%', height:'30%' ,  borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}>
            <button onClick={() => alert("need to know information flow")} className="topButton left"> To-Do </button>
            <button onClick={() => alert("Color needs to be moved to inline")} className="topButton right"> Reminders </button>

            </div>
            <div style={{position:'absolute', left:'5%', top: '30%', flex:1}} className='Overflow'>
              <ToDoList></ToDoList>
              </div>
            </div>
          <div style={{ position: 'absolute', top: '70%', right:'7%', width: '25%', height: '20%', borderRadius:'30px', backgroundColor: '#FEDCAC', overflow: 'auto', // or 'scroll'
'msOverflowStyle': 'none', /* IE and Edge */
'scrollbarWidth': 'none', /* Firefox */
'WebkitOverflowScrolling': 'touch' /* iOS Safari */}}>
          {/* scroll bars can be hidden and set to toggle visable on mouse over*/}
            <MovieClip />
          </div>
  
            </div>
        </div>

        </div>

    
  )
}
export default StartStudyingMain