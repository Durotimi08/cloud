import face from "../images/muscle.jpg"
import like from '../icons/loved.png'

export default function Incom() {
    return(
        <>
         <div className='incoming-msg'>
                    <div className='msg-pic'>
                          <img src={face} alt=""></img>
                    </div>
                    <div className='msg-text'>
                         <div className='msg-mess'><span>Floyd taylor</span><span>it is a very nice product</span></div>
                         <div className='msg-like'>
                              <img src={like} alt=""></img>
                              <span>Like</span>
                         </div>
                    </div>
          </div>
          <div className='msg-line'></div>
        </>
    );
}