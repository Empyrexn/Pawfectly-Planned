

import { useEffect, useState } from 'react';
import { useBackgroundContext } from '../Context/BackgroundSelection';
// ready to update profilePic from switch statement
function useProfilePic() {
    const [ProfilePic1, setBackgroundImage] = useState('');
    const {background} =  useBackgroundContext()
    const {ProfilePic} = background
    useEffect(() => {
        setBackgroundImage(ProfilePic);
    }, []);

    return { ProfilePic1 };
}

export default useProfilePic;
