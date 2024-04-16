import React from 'react'

import { MyProvider } from '../Context/context';
import SideBarHolder from '../OutlineComponents/SideBarHolder';
function PageMain({ComponentToRender,props}) {
  return (
    <div style={{overflow:'none'}}> 
          <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MyProvider>
        <div style={{ flex: '0 0 auto' }}> {/* This keeps Bar at the top */}
    
          
        </div>
        <div style={{ display: 'flex', flex: '1 1 auto' }}> {/* This flex container holds the main content */}
        <div style={{ flex: '1 1 auto', maxWidth: '17%', flexShrink: 0 }}> {/* 1/8 of the screen for SideBar */}
        <SideBarHolder/>
        
          </div>
          <div style={{ flex: '6 1 auto', display: 'flex', flexDirection: 'column', maxWidth: '83%', overflowY:'scroll' }}> {/* This flex container holds DisplLogin and LowerGraphics */}
      

          <ComponentToRender></ComponentToRender>
           
          </div>
  
        </div>
      </MyProvider>
    </div>
       
    </div>
  )
}

export default PageMain
