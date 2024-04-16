import React, {useState, useEffect} from 'react'
import { useNoteContext } from '../Context/BulletinBoard'
function BulletinBoard(noteNumb) { // only going to be used to render text and server call each page has changing styles 
    const [words, SetWords] = useState([""])
    const {notes} = useNoteContext();

    useEffect(() =>{
   //   SetWords(notes[noteNumb])
      SetWords(["this is where words go","this is where words go"])
    },[])
  return (
    <div style={{  justifyContent: 'center',  alignItems: 'center', margin:'18%'}}>
   <ul>
      {words.map((item, index) => (
      <li key={index} >
          <p className='StickyNote'>
         {item}
         </p>

         </li>
      ))}

</ul>
       
      </div>
  )
}

export default BulletinBoard