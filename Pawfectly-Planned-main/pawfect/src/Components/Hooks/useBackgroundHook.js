

import { useEffect, useState } from 'react';
import { useBackgroundContext } from '../Context/BackgroundSelection';
// ready to update background Image from switch statement
function useBackgroundImage() {
    const [backgroundImage1, setBackgroundImage] = useState('');
    const {background} =  useBackgroundContext()
    const {backgroundImage} = background
    useEffect(() => {
       
        console.log("changed")
        setBackgroundImage(backgroundImage);
    }, []);

    return { backgroundImage1 };
}

export default useBackgroundImage;
