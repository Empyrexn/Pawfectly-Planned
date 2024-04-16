import React, {useState} from 'react';
import { useBackgroundContext } from '../Context/BackgroundSelection'; 
import SelectBackground from '../Selectors/BackgroundSelector';
function Store({ image, loc, hasBought,type, price }) {
  const {background, updateBackground} = useBackgroundContext(); 
  const [redText, updateRedText] = useState(false);
  const{points} = background
  const select = () => {
    let updatedBackground = {};
    if (type === 1) {
        updatedBackground = { ...background, backgroundImage: loc };
    }
    if (type === 2) {
        updatedBackground = { ...background, ProfilePic: loc };
    }
    if (type === 3) {
        updatedBackground = { ...background, backgroundColor: loc };
    }
    updateBackground(updatedBackground);
};
  const buy = () => {
    let updatedBackground = {};
      
    if(price<points){
      updatedBackground = { ...background, backgroundImage: 1 };
      updateBackground(  updatedBackground) // should work 
      // server call 
    }
    else{
      updateRedText(true)
    }
    
  }

  // should take in the image path and render the image with either select or buy if it's been bought or selected
  return (
    <div className="store-item"> {/* Added class name for the container */}
      <div className="store-image-container"> {/* Added class name for the image container */}
        <div className="store-image" style={{ backgroundImage: `url(${image})` }}></div> {/* Added class name for the image */}
       
        {redText&& 
          <div className="redText">Not enough points missing {price-points} </div>
        }
        {hasBought ? (
          <button className="storeButton" onClick={select}>Select</button> 
        ) : (
          <button className="storeButton" onClick={buy}>Buy</button> 
        )}
      
      </div>
    </div>
  );
}

export default Store;
