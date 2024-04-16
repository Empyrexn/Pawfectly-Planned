import React from 'react'

import SideImage from "../../Assets/temp.png"
import googleLogo from   "../../Assets/google.png"
import facebookLogo from   "../../Assets/facebook.png"
import GitHubLogo from   "../../Assets/GitHub.png"
function SignInPage({ComponentToRender,props}) {
  return (
    <div className='BackGroundImage' style={{ backgroundColor:"teal"}}>
    
          <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: '0 0 auto' }}> {/* This keeps Bar at the top */}
         
          
        </div>
        <div style={{ display: 'flex', flex: '1 1 auto' }}> {/* This flex container holds the main content */}
        <div style={{ flex: '1 1 auto', width: '50%' }}> {/* 1/8 of the screen for SideBar */}
       
        <div className='logInBox'>
        <p className ="tinyText">
        <img src={SideImage} alt="Pawfect" className='Logo'/>
        </p>
        <ComponentToRender/>

        <div className='ButtonHolder'>
        <button className='ButtonImage'>
            <img src={googleLogo} alt="Google" className='ImageButton'/>
          </button>
          <button className='ButtonImage'>
            <img src={GitHubLogo} alt="Github" className='ImageButton'/>
          </button>
          <button className='ButtonImage'>
            <img src={facebookLogo} alt="Facebook" className='ImageButton'/>
          </button>
        </div>
        <p  className ="tinyText" >Tiny text</p>
        </div>
          </div>
          <div style={{ flex: '6 1 auto', display: 'flex', flexDirection: 'column' }}> {/* This flex container holds DisplLogin and LowerGraphics */}
          
        

          </div>
  
        </div>
    </div>

    </div>
  )
}

export default SignInPage
