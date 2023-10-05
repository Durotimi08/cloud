import cart2 from '../icons/cart2.png'
import left from '../icons/left.png'
import left2 from '../icons/left2.png'
import right from '../icons/go.png'
import like from '../icons/loved.png'
import watch from "../images/watch.jpg"
import head from "../images/headphone.png"
import face from "../images/muscle.jpg"
import airpod from "../images/airpods.png"
import {useState} from "react"
import star from "../icons/blackstar.png"
import Itemstat from '../components/itemstat'
import Ski from "../components/ski"
import { useNavigate } from "react-router-dom";


export default function Item() {
     const [ims, setIms] = useState([watch, airpod, head, airpod]);
     const [imsval, setImsval] = useState(0);
     const navigate = useNavigate();
    return (
     <>
     <div className="isitem">
     <span className="spanisitem"><div><img  onClick={()=> navigate(-1)} src={left2} alt=""></img></div><span className="sorry-text">Category / Fashion</span></span>
     <div className="isitem1">
          <div className="isitem11">
               <div className="isitem111">
               <img src={ims[imsval]} alt=""></img>
                    {imsval < (ims.length - 1) && <div onClick={()=> setImsval(prevval => (prevval + 1))} className="isitem1111"><img src={right} alt=""></img></div>}
                    {imsval > 0 && <div onClick={()=> {setImsval(prevval => (prevval - 1))}} className="isitem1112"><img src={left} alt=""></img></div>}
               </div>
               <div className="isitem112">
                    {ims.map((single, key)=>{
                    return (<div><img id={key} src={single} alt=""></img></div>);
                    })}
               </div>
          </div>
          <div className="isitem12">
          <div className="isitem121">
               <div className="isitem1211">
                    <span>Apple macbook pro</span>
               </div>
               <div className="isitem1213">
                    <div className="star">
                         <img src={star} alt=""></img>
                         <img src={star} alt=""></img>
                         <img src={star} alt=""></img>
                         <img src={star} alt=""></img>
                         <img src={star} alt=""></img>
                    </div> 
               </div>
               <div className="isitem1212">
                     <span></span>
               </div>
               <div className="isitem1214">
                    <span>$1,000</span>
               </div>
          </div>
          <div className="isitemline"></div>
          <div className="isitem122">
               <div className="isitem1221">
                    <span>Available size</span>
                    <div className="isitem12211">
                         <div className="isitem122111">S</div>
                         <div className="isitem122112">M</div>
                         <div className="isitem122113">L</div>
                    </div>
               </div>
               <div className="isitem1222">
                    <span>Available color</span>
                    <div className="isitem12221">
                         <div className="active"><span className="radio-clr" style={{backgroundColor: "black"}}></span></div>
                         <div><span className="radio-clr" style={{backgroundColor: "brown"}}></span></div>
                         <div><span className="radio-clr" style={{backgroundColor: "pink"}}></span></div>
                    </div>
               </div>
          </div>
          <div className="isitemline"></div>
          <div className="isitem123">
               <div className="isitem1231">
                    <span className='isitem12311'>-</span>
                    <span className='isitem12311'>0</span>
                    <span className='isitem12311'>+</span>
               </div>
               <div className="isitem1232"><img src={cart2} alt=""></img><span>Add to cart</span></div>
          </div>
          </div>
     </div>
     <div className="isitem2">
          <div className='isitem21'>
               <span>Comments</span>
          </div>
          <div className='isitem22'>
          <div className='gen-msg'>
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
          </div>
          </div>
          <div className='isitem23'>
               <input type="text" placeholder='Post  a comment' className='comment' name='message'></input>
               <input type="button" value="Post" className='post-comment'></input>
          </div>
     </div>
     <div className="isitem3">
     <div className='hed'>Other products</div>
     <div className='heite'>
     <div className="blur">
     <Ski />
     <Ski />
     <Ski />
     <Ski />
     <Ski />
     <Ski />
     </div>
     </div>
     </div>
     <Itemstat iod={4} />
     </div> 
     </>
    );
  }