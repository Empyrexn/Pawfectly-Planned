import './App.css';
import PageHolderSigned from './Components/PageOutlines/ContextHolder';
import { PageProvider } from './Components/Context/RenderPage1';
import { AccountProvidor } from './Components/Context/AccountInfo';
import { MyProvider } from './Components/Context/context';


import { GoogleOAuthProvider } from '@react-oauth/google';

import { CalendarProvidor } from './Components/Context/CalendarEvents';
import CreateUser from './Components/Network/userTest';
function App() {

//<PageHolderSigned/>
 
  return (
    <div className="App">
       <GoogleOAuthProvider clientId="248161691947-tq2ej9oeqnu3bpqskja486655nuk8442.apps.googleusercontent.com"> 
      <PageProvider>
      <AccountProvidor>
        <MyProvider>
          <CalendarProvidor>
      
    <PageHolderSigned/>
    </CalendarProvidor>
           </MyProvider>
           </AccountProvidor>
      </PageProvider>
      </GoogleOAuthProvider>;

    </div>
  );
}

export default App;