import React , {useState} from 'react'
import { useAccountContext } from '../Context/AccountInfo';
import { usePageContext } from '../Context/RenderPage1';
import { useCookies } from 'react-cookie';
import HandleServer from '../Network/ServerCalls';
import { useMyContext } from '../Context/context';
function SignData() {
    const [Language, setSelectedOption] = useState('English');
    const [cookies, setCookie, removeCookie] = useCookies(['UserID']);
    const [errors, setErrors] = useState({ username: '', passWord: '', Email:'' }); // State for errors
    const {setIsGraphicVisible} = useMyContext();
    const {updateAccountInfo} = useAccountContext();
    const {currPage, setCurrPage} = usePageContext();
  const [username, updateUserName] = useState("")
  const [passWord, updatePassword] = useState("")
  const [Email, updateEmail] = useState("")
  
  const handleSetCookie = () => {
    setCookie('UserID', Email);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    let formValid = true;
    const newErrors = { username: '', passWord: '', Email:'' };

    if (!username) {
      newErrors.username = 'Username is required';
      formValid = false;
    }

    if (!passWord) {
      newErrors.passWord = 'Password is required';
      formValid = false;
    }
    if (!Email) {
      newErrors.Email = 'Proper email is required';
      formValid = false;
    }
    if (!formValid) {
      setErrors(newErrors);
      return;
    }
    const obj = {
        UserName: username,
        Password: passWord,
        Email: Email,
       // GUID: guid

    };
    try {
   
        const temp = await HandleServer(obj,"Get user")
        if(temp.status === 201|| temp.status === 200){
          alert("user already exists")
        }
        else {
          const temp = await HandleServer(obj, "new user");
        if (temp.status === 200|| temp.status === 201) {
          updateAccountInfo({ userName: username, Email: Email, Language: Language, Signedin:true });
          handleSetCookie()
          setIsGraphicVisible(true)
          setCurrPage(3)
          
        } else {
            alert("User already exists");
        }
      }
    } catch (error) {
        console.error("Error occurred while communicating with server:", error);
        // Handle error gracefully
    }
};
const handleCLick = () =>{
  setCurrPage(1)
  console.log(currPage)
}
  return (
    <div >
        <form onSubmit={handleSubmit} className='SignUp'>

            <label>User Name: </label>
            <input type='Text' onChange={(e) => {updateUserName(e.target.value)}} ></input>
            {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}

            <label>Password: </label>
            <input type='Password'  onChange={(e) => {updatePassword(e.target.value)}}></input>
            {errors.passWord && <div style={{ color: 'red' }}>{errors.passWord}</div>}
            <label>Email: </label>
            <input type='Text'  onChange={(e) => {updateEmail(e.target.value)}}></input>
            {errors.Email && <div style={{ color: 'red' }}>{errors.Email}</div>}
       

            <button type='submit'>Sign up</button>
            <button onClick={handleCLick}>Go back</button>
        </form>
    </div>
  )
}

export default SignData


/*            <select value={Language} onChange={handleDropdownChange}>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French </option>
                <option value="German">German </option>
            </select>
            */