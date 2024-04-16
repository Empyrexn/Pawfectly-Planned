import React, { useState } from 'react';

function Music() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseOver = (button) => {
    setHoveredButton(button);
  };

  const handleMouseOut = () => {
    setHoveredButton(null);
  };

  return (
    <div>

        <div style={{flexDirection:"row"}}>
            <div>
                music image
            </div>
            <div>
                music title
            </div>
        </div>

        <div style={{paddingTop:"5%"}}>
            music bar
        </div>


      <div style={{ flexDirection: 'row', position: 'absolute', bottom: '3%', display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
        <button
          style={{ backgroundColor: hoveredButton === 'S' ? '#F8D57E' : '#F6F7FB', color: 'black', padding: '10px', borderRadius: '5px' }}
          onMouseOver={() => handleMouseOver('S')}
          onMouseOut={handleMouseOut}
        >
          S
        </button>
        <button
          style={{ backgroundColor: hoveredButton === 'R' ? '#F8D57E' : '#F6F7FB', color: 'black', padding: '10px', borderRadius: '5px' }}
          onMouseOver={() => handleMouseOver('R')}
          onMouseOut={handleMouseOut}
        >
            {"<-"}
        </button>
        <button
          style={{ backgroundColor: hoveredButton === 'P' ? '#F8D57E' : '#F6F7FB', color: 'black', padding: '10px', borderRadius: '5px' }}
          onMouseOver={() => handleMouseOver('P')}
          onMouseOut={handleMouseOut}
        >
            {"|>"}
        </button>
        <button
          style={{ backgroundColor: hoveredButton === 'S2' ? '#F8D57E' : '#F6F7FB', color: 'black', padding: '10px', borderRadius: '5px' }}
          onMouseOver={() => handleMouseOver('S2')}
          onMouseOut={handleMouseOut}
        >
           {"->"}
        </button>
        <button
          style={{ backgroundColor: hoveredButton === 'R2' ? '#F8D57E' : '#F6F7FB', color: 'black', padding: '10px', borderRadius: '5px' }}
          onMouseOver={() => handleMouseOver('R2')}
          onMouseOut={handleMouseOut}
        >
          R
        </button>
      </div>
    </div>
  );
}

export default Music;
