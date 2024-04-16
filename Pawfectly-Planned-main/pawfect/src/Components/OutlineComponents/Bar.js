import React from 'react';
import Button from '../basicComponents/Button';
import { usePageContext } from '../Context/RenderPage1';
function Bar() {
    const LogIn = () => {
        setCurrPage(3)
    };


    const {setCurrPage} = usePageContext();
    const Button2 = () => {
        setCurrPage(4)
    };

    const Button3 = () => {
        setCurrPage(2)
    
    };

    const Button4 = () => {
        setCurrPage(1)
      
    };

    return (
        <div className='TopBar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
           <Button handleClick={Button4}>Log in</Button>
           <Button handleClick={Button3}>Sign up </Button>
            <Button handleClick={LogIn}>Unnamed</Button>
            <Button handleClick={Button2}>Unnamed</Button>
        
           
         
        </div>
    );
}

export default Bar;
