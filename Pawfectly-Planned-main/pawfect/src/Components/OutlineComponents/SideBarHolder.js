
import React from 'react'
import { usePageContext } from '../Context/RenderPage1'
import SideBar from './SideBar';
import SideBarMain from './SideBarMain';
function SideBarHolder() {
    const { currPage } = usePageContext();

    const renderPageContent = () => {
      switch (currPage) {
    
        case 3:
        return <SideBarMain />;
        case 1:
        case null:
        case 2:
        case 5:
        case 8:
        case 4:
        case 6:
        case 7:
        case 9:
        case 10:

        return <SideBar/>
        default:
          return null;
      }
    };
  
    return <div className='SideBar' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}> { renderPageContent()} </div>;
}

export default SideBarHolder