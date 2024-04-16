

import { useEffect, useState } from 'react';
import { useBackgroundContext } from '../Context/BackgroundSelection';
// ready to update colors from switch statement
function useColorScheme() {
    const [colors, setBackgroundImage] = useState('');
    const {background} =  useBackgroundContext()
    const {backgroundColor} = background
    useEffect(() => {
        setBackgroundImage(backgroundColor);
    }, []);

    return { colors };
}

export default useColorScheme;
