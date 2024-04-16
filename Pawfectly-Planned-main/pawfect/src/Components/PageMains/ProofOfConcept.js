import React, {useState, useEffect} from 'react'
import SelectBackground from '../Selectors/BackgroundSelector';
import img1 from '../../Assets/Backgrounds/appa1.png'
function ProofOfConcept() {
    const [pageNumber, updatePageNumber]= useState(1)
    const [image, updateImage] = useState(img1)

    useEffect(() => {
        const imageUrl = SelectBackground(pageNumber); // Assuming SelectBackground returns the URL
        updateImage(imageUrl);

      }, [pageNumber]);
  return (
    <div  className='PageMain'style={{ opacity:'1',backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat",   backgroundSize: 'cover'}}>

        <div style={{position:'absolute', top:"40%"}}>
    <button onClick={() => updatePageNumber(pageNumber-1)}>Left</button>
    <button onClick={() => updatePageNumber(pageNumber+1)}>right</button>
        </div>
    </div>

  )
}

export default ProofOfConcept