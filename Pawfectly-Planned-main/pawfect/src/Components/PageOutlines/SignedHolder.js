
import PageMain from './PageMain';
import { usePageContext } from '../Context/RenderPage1';
import HomePageMain from '../PageMains/HomePageMain';
import StartStudyingMain from '../PageMains/startStudyingMain';
import BuddyMain from '../Buddy/BuddyMain';
import Achievements from '../PageMains/Achievements';
import TimerPageMain from '../PageMains/TimerPageMain';
import ProofOfConcept from '../PageMains/ProofOfConcept';
import CalendarMain from '../PageMains/CalendarMain';
import CreateUser from '../Network/userTest';
import StoreMain from '../PageMains/StoreMain';
import Video from '../PageMains/Movie';
import { useEffect } from 'react';
import { useBackgroundContext } from '../Context/BackgroundSelection'; 
import { useStoreContext } from '../Context/StoreArrays';
import { useAchievementContext } from '../Context/AchievementContext';
function SignedHolder() {
  const { currPage } = usePageContext();
  const {background, updateBackground} = useBackgroundContext();
  const {storeArray, updateStoreArray} =useStoreContext()
  const {Achievement, updateAchievements} = useAchievementContext();
  const {points} = background
  useEffect(() =>{
    console.log("updating account info from backend") 
    updateBackground({
      ...background, 
      ProfilePic:1,
      backgroundImage:2,
      backgroundColor:1,
      points:0
    })
    updateStoreArray({
      backgroundArray: [1,0,1,1,1,1,1], 
      ColorArray: [0,0,0,0,0,0,1], 
      ProfilePicArray: [0,0,0,0,0,0,1]
    })
    updateAchievements({
      ...Achievement,
      daily:[0,0,1,1,0,0,0],
       lifeTime:[0,0,0,0,1,0]
    })
  },[])
  useEffect(() =>{ // all server update calls dependent on state changes of user can be sent here 
    //server call 
  },[points])
    // use useEffect here to update all context states with async backend calls once backend exists
  return (
    <div style={{overflow:'hidden'}} >

      {(currPage === 3) && <PageMain ComponentToRender={HomePageMain} props={"Main Page"}/>}
      {(currPage === 4) && <PageMain ComponentToRender={StartStudyingMain} props={"Main Page"}/>}

      {(currPage === 5) && <PageMain ComponentToRender={StoreMain} props={"Main Page"}/>}
      {(currPage === 6) && <PageMain ComponentToRender={TimerPageMain} props={"Main Page"}/>}
      {(currPage === 7) && <PageMain ComponentToRender={Achievements} props={"Main Page"}/>}
      {(currPage === 8) && <PageMain ComponentToRender={CalendarMain} props={"Main Page"}/>}
      {(currPage === 9) && <PageMain ComponentToRender={BuddyMain} props={"Main Page"}/>}
      {(currPage === 10) && <PageMain ComponentToRender={Video} props={"Main Page"}/>}
      {(currPage === 11) && <PageMain ComponentToRender={CreateUser} props={"Main Page"}/>}
     
    </div>
  );
}

export default SignedHolder;

