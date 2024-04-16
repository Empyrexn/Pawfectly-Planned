
import { usePageContext } from '../Context/RenderPage1';
import LoginPage from '../PageMains/LogInPage';
import DisplLogin from '../SignLogInComponents/DisplLogin';
import SignData from '../SignLogInComponents/SignData';
import SignInPage from '../PageMains/SignInPage';

function UnsignedHolder() {
  const { currPage } = usePageContext();
  
  return (
    <div >
     
      {((currPage === 1) || (currPage ===null)) && <LoginPage ComponentToRender={DisplLogin} props={"Log in"}/>}

      {(currPage ===2) && <SignInPage ComponentToRender={SignData} props={"Create New Account"}/>}
    </div>
  );
}

export default UnsignedHolder;

