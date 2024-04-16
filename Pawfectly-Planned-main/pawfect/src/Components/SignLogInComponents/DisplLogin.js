import React, { useState, useEffect} from 'react';
import { useAccountContext } from '../Context/AccountInfo';
import { usePageContext } from '../Context/RenderPage1';
import { useCookies } from 'react-cookie';

import googleLogo from   "../../Assets/google.png"
import { useMyContext } from '../Context/context';
import ApiCalendar from "react-google-calendar-api";
import { useGoogleLogin } from '@react-oauth/google';
import { useCalendarContext } from '../Context/CalendarEvents';
import HandleServer from '../Network/ServerCalls';

import axios from 'axios';
function DisplLogin() {
  const [cookies, setCookie, removeCookie] = useCookies(['UserID', 'AuthTokem', 'refresh']);
  const [userName, updateUserName] = useState('');
  const [passWord, updatePassword] = useState('');
  const [errors, setErrors] = useState({ userName: '', passWord: '' }); // State for errors

  const { accountInfo, updateAccountInfo } = useAccountContext();
  const { Events, UpdateEvents } = useCalendarContext();
  const { setCurrPage } = usePageContext();
const {setIsGraphicVisible} = useMyContext();

/*

const config = { // might want to move to backend
  clientId: "248161691947-tq2ej9oeqnu3bpqskja486655nuk8442.apps.googleusercontent.com",
  apiKey:  "AIzaSyC4AeUajhyHCplL4A3uTGK79rfPwXTxYuk",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);
*/
const onLogIn = useGoogleLogin({
  
  onSuccess: async (tokenResponse) => {
    /*
    const config = {
      apiKey: null,
      clientId: "248161691947-tq2ej9oeqnu3bpqskja486655nuk8442.apps.googleusercontent.com",
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
      scope: "https://www.googleapis.com/auth/calendar",
      token: tokenResponse.access_token,
    };
    const apiCalendar = await new  ApiCalendar(config);

    console.log(apiCalendar); // Log the token response (optional)
*/

    try {
   //   apiCalendar.handleAuthClick(tokenResponse.access_token);
      // Fetch user info to get the email
      const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
          'Content-Type': 'text/plain',
        }
      });
      const userInfo = await userInfoResponse.json();
      const userEmail = userInfo.email;

      console.log("User Email:", userEmail);
/*
      const obj = {email: userEmail};
      const userCheck = HandleServer("Get user", obj)
      if(userCheck.status != 200 && userCheck.status != 201){
        const obj = {
          email:userEmail,
          passWord:"googleLogIn"+userEmail
        }
        HandleServer("new user", obj)
      }
      
    
      const calendarsResponse = await apiCalendar.listEvents();
   //   console.log("User primaryCalendar ID:", calendarsResponse);
      //const primaryCalendar = calendarsResponse.result.items.find(calendar => calendar.primary);
      try{
      if (primaryCalendar) {
        const userCalendarId = primaryCalendar.id;
        console.log("User primaryCalendar ID:", primaryCalendar);
*/
        // List upcoming events from the user's primary calendar
        try{
          const fetchEvents = async () => {
            try {
              // Make API call to Google Calendar API to retrieve events
              const response = await axios.get('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
                headers: {
                  Authorization: `Bearer ${tokenResponse.access_token}`, // Replace accessToken with the user's access token obtained after authentication
                },
                params: {
                  key: 'AIzaSyC4AeUajhyHCplL4A3uTGK79rfPwXTxYuk', 
                  timeMin: new Date().toISOString(), // Optional: Specify the minimum time of events to retrieve (e.g., only future events)
                  maxResults: 10, // Optional: Limit the number of events to retrieve
                  singleEvents: true, // Optional: Treat recurring events as separate instances
                  orderBy: 'startTime', // Optional: Order events by start time
                },
              });
      
              // Set the retrieved events in the state
              UpdateEvents(response.data.items);
            } catch (error) {
              console.error('Error fetching events:', error);
            }
          };
          await fetchEvents()
        }
        catch(error){
          console.error("error during events", error)
        }
        /*
        try{
        const eventsResponse = await apiCalendar.listUpcomingEvents();
        console.log("Upcoming events:", eventsResponse.result.items);
        UpdateEvents(eventsResponse.result.items);
        }
        catch(error){
          console.error("error during events", error)
        }
*/
      setCookie('AuthTokem', tokenResponse.access_token);
      setCookie('refresh', tokenResponse);
      setCookie('UserID', userEmail);

      // Now you can use the Google Calendar API methods
      // For example, list events
      /*
      try{
      const response = await apiCalendar.listUpcomingEvents();
      console.log("Upcoming events:", response.result.items);
      UpdateEvents(response.result.items);
      }
      catch(error) {
        console.error("error from calendar", error);
      }
      */
      setCurrPage(3);
      setIsGraphicVisible(true);
    } catch (error) {
      console.error("Error during login:", error);
    }
  },
});



  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    let formValid = true;
    const newErrors = { userName: '', passWord: '' };

    if (!userName) {
      newErrors.userName = 'Username is required';
      formValid = false;
    }

    if (!passWord) {
      newErrors.passWord = 'Password is required';
      formValid = false;
    }

    if (!formValid) {
      setErrors(newErrors);
      return;
    }
   const obj = {
    userName:userName,
    passWord:passWord
   }
   const temp = await HandleServer(obj,"Get user")
    if(temp.status === 201|| temp.status === 200){
      updateAccountInfo({UserName: temp.data.UserName}) 
      setCookie('UserID', temp._id)
      setIsGraphicVisible(true);
      setCurrPage(3) 
    }
    else{
      alert("invalid account info")
     // should work
    }
  
  };

  const handleSecondButton2 =  () => {
  updateAccountInfo({ UserName: 'Guest', Email: 'unknown', Language: 'English', Signedin: false });
  removeCookie('AuthTokem');
  }

 // if (cookies.AuthTokem === undefined) {
    return (
      <div>
        <form onSubmit={handleSubmit} className="LogIn" style={{ paddingLeft: '0' }}>
          <label>Email </label>
          <input type="Text" onChange={(e) => updateUserName(e.target.value)} style={{ border: "1px solid rgba(255, 165, 0)", borderRadius: "20px" }} />
          {errors.userName && <div style={{ color: 'red' }}>{errors.userName}</div>}

          <label>Password: </label>
          <input type="password" onChange={(e) => updatePassword(e.target.value)} style={{ border: "1px solid rgba(255, 165, 0)", borderRadius: "20px" }} />
          {errors.passWord && <div style={{ color: 'red' }}>{errors.passWord}</div>}
          <br />
          <p className="tinyText" style={{ fontSize: "0.6em"}}>Forgot Password?</p>
          <br />
          <p></p>
          <button type="submit" style={{ borderRadius: "20px", textAlign: "center", marginLeft: "3px" }}>Log In</button>
        </form>

        <p className="tinyText" style={{ fontSize: "0.6em", textAlign:"center",  marginRight:"3px"}}>Or continue with </p>
        <br></br>
                  <div className='ButtonHolder' >
                  <button className='ButtonImage' style={{ borderRadius: '20px', marginRight: '3px'}} onClick={onLogIn}>
                <img src={googleLogo} alt="Google" className='ImageButton' />
            </button>
      

                  </div>

      </div>
    );
  }
  /* else {
    return (

        <div>
          <button onClick={handleSecondButton}>Sign in</button>
          <button onClick={handleSecondButton2}>Sign out</button>
        </div>

    );
  }
}*/
export default DisplLogin;
