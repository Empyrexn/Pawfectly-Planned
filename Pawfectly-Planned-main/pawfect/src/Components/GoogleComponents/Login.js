import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

export default function LoginGoogle(){
    return(
<GoogleLogin
  onSuccess={credentialResponse => {
    const credentialResponse2 = jwtDecode(credentialResponse.credential)
    console.log(credentialResponse);
    console.log(credentialResponse2)
  }}
  onError={() => {
    console.log('Login Failed');
  }}></GoogleLogin>
    )
}