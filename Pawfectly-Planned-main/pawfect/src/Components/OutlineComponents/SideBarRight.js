import React from 'react'
import Button from '../basicComponents/Button';
import { usePageContext } from '../Context/RenderPage1';
function SideBarRight() {
    const {setCurrPage} = usePageContext();
    const Button1 = () => {
        setCurrPage(5)
    
    };
    const Button2 = () => {
      setCurrPage(6)
    };
    const Button3 = () => {
      setCurrPage(6)
    };
    const Button4 = () => {
        setCurrPage(8)
    };
  return (
    <div>
              <div className='SideBar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
           <Button handleClick={Button1}>Blank</Button>
           <Button handleClick={Button2}>Blank</Button>
            <Button handleClick={Button3}>Blank</Button>
            <Button handleClick={Button4}>Blank</Button>
        
           
         
        </div>
    </div>
  )
}

export default SideBarRight