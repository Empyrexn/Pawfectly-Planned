import React, { useState, useEffect } from 'react';
import { useNoteContext } from '../Context/BulletinBoard';
// Import your CSS file

function ToDoList() {
  const [words, setWords] = useState([""]);
  const { notes } = useNoteContext();

  useEffect(() => {
    // SetWords(notes[noteNumb])
    setWords(["this is where words go", "this is where words go"]);
  }, []);

  return (
    <div >
      
        {words.map((item, index) => ( 
            <div key={index}>
                  <br></br>
            <label className="checkbox-label">
              <input type="checkbox" className='checkbox-input' />
              <span className="checkbox-custom"></span>
              {item}
            </label>
            <br></br>
            </div>
        ))}
  
    </div>
  );
}

export default ToDoList;
