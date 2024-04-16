import React, { useState, useEffect } from 'react';
import SelectBackground from '../Selectors/BackgroundSelector';
import Store from '../StoreComponents/Store';
import Points from '../StoreComponents/Points';
import { useStoreContext } from '../Context/StoreArrays';
import ColorSelector from '../Selectors/ColorSelector';

function StoreMain() {
   const {storeArray} =useStoreContext()
   const {backgroundArray, ColorArray, ProfilePicArray } = storeArray


    return (
      <div className="store-main">
        <div className="header">
          <div className="title">The Pet Store!</div>
          <div className="points">
            <Points></Points>
          </div>
        </div>

        <div className="store-sections" style={{overflowY:'scroll', maxHeight:'60%'}}>
          <div className="wallpaper-section">
            <div className="section-title">Backgrounds - $100 each</div>
            <div className="items">
              {backgroundArray.map((item, index) => (
                <div key={index} className="item">
                  <Store image={SelectBackground(index)} loc={index} hasBought={item} type={1} price={100}></Store>
                </div>
              ))}
            </div>
          </div>
          <div className="wallpaper-section">
            <div className="section-title">Colors - $100 each</div>
            <div className="items">
              {ColorArray.map((item, index) => (
                <div key={index} className="item">
                  <Store image={SelectBackground(index)} loc={index} hasBought={item} type={1} price={100}></Store>
                </div>
              ))}
            </div>
          </div>
          <div className="character-section">
            <div className="section-title">Character - $200 each</div>
            <div className="items">
              {ProfilePicArray.map((item, index) => (
             
                <div key={index} className="item">
                  <Store image={ColorSelector(index)} loc={index} hasBought={item} type={1} price={200}></Store>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    );
  }

export default StoreMain;
