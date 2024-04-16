
import React from 'react'


import { usePageContext } from '../Context/RenderPage1';
import dog from '../../Assets/CoolDog.png'
import BigDog from "../../Assets/BigCoolDog.png"
import logo from '../../Assets/MainLogo.png'

function LoginPage({ComponentToRender,props}) {

  const { setCurrPage } = usePageContext();


  return (
    <div className='BackGroundImage' style={{ backgroundColor:"#FEDCAC"}}>
      <div style={{backgroundImage:`url(${logo})`, width:'150px', height:'150px', backgroundRepeat:'no-repeat', position:'absolute', right:'1%'}}></div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>

          <div style={{ flex: '0 0 auto' }}> {/* This keeps Bar at the top */}
          </div>
          <div style={{ display: 'flex', flex: '2 1 auto', alignItems: 'flex-start', backgroundImage: `url(${BigDog})`,   backgroundRepeat: 'no-repeat' }}>

            <div style={{ flex: '1 1 auto', width: '50%',  textAlign: 'left', paddingTop:"0px" }}> 
              <div className='logInBox' >
                <div className='box' style={{ textAlign: 'left', paddingTop:0, fontWeight:"bold"}}>
                  <p style={{textAlign: "center", fontSize: "35px", color:'rgba(255, 165, 0)'}}>Pawfectly Planned</p>
                  <br></br>
                  <h1 style={{textAlign: "center", fontSize: "25px"}}>Welcome Back!</h1>
                  <br></br>
            
                  <ComponentToRender/>
             

                  

                  <br></br>
                    <p></p>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p className="tinyText" style={{ textAlign: "left", fontSize: "0.7em", marginLeft: "-30px" }}>Don't have an account yet?</p>
                  <button className="tinyText" style={{ textAlign: "right", fontSize: "0.7em", border:"none", background:"none", fontWeight:'bold', color:'blue', textDecoration: 'underline'}} onClick={() => setCurrPage(2)}
                    onMouseEnter={(e) => e.target.style.color = 'red'}
                    onMouseLeave={(e) => e.target.style.color = 'blue'}>Register for free</button>
                </div>
                </div>
              </div>
            </div>
            <div style={{ flex: '6 1 auto', display: 'flex', flexDirection: 'column', backgroundImage: `url(${dog})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '600px' }}>

           
            </div>
          </div>

      </div>
    </div>
  )
}

export default LoginPage;
