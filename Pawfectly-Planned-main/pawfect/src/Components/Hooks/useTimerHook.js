import { useEffect } from 'react';
import { usePageContext } from '../Context/RenderPage1';
import { useTimerContext } from '../Context/TimerHolder';
// doesnt work 
function TimerUpdater(timerValue) {
    const  {CurrPage}  = usePageContext();
    const  {currTimer, updateCurrTImer}  = useTimerContext();
   console.log(timerValue)
   useEffect(() => {
       updateCurrTImer(timerValue);
       console.log(timerValue)
   }, [timerValue, ]);
}

export default TimerUpdater;
