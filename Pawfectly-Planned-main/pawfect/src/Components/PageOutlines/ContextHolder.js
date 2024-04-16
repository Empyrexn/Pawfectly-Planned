
import { BuddyProvider } from '../Context/BuddyInfo';
import { BoardProvider } from '../Context/BulletinBoard';
import { AccountProvidor } from '../Context/AccountInfo';
import SignedHolder from './SignedHolder';
import UnsignedHolder from './UnsignedHolder';
import { useMyContext } from '../Context/context';
import { TimerProvider } from '../Context/TimerHolder';
import { BackgroundProvidor } from '../Context/BackgroundSelection';
import { StoreArrayProvider } from '../Context/StoreArrays';
import { AchievementProvidor } from '../Context/AchievementContext';
function PageHolderSigned() {
//need to see how account information is used to determine cut off of render
const {isGraphicVisible} = useMyContext();
  return (
    <div >
     {!isGraphicVisible&&
      <UnsignedHolder/>
     }
{isGraphicVisible &&
<AchievementProvidor>
<StoreArrayProvider>
<BackgroundProvidor>
  <BuddyProvider>
    <BoardProvider>
      <AccountProvidor>
        <TimerProvider>
          <SignedHolder/>
        </TimerProvider>
      </AccountProvidor>
    </BoardProvider>
  </BuddyProvider>
  </BackgroundProvidor>
  </StoreArrayProvider>
  </AchievementProvidor>
}
    </div>
  );
}

export default PageHolderSigned;

