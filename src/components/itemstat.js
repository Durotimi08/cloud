import { useState } from "react";
import Incom from "./incom"
import search from "../icons/fire.png"
import acct from "../icons/uiacct.png"
import home from "../icons/uihome.png"
import message from "../icons/uimessage.png"
import send from "../icons/uisend.png"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Itemstat(props){
    const [sid, setSid] = useState(props.iod);
    const navigate = useNavigate();
    return(
        <>
        {sid !== null && (<div className="itemstat">
            {sid === 4 ? (<div className="itemstat2"><img src={home} alt=""></img></div>) : (<div className="itemstat1" onClick={(event)=> setSid(4)}><img src={home} alt=""></img></div>)}
            {sid === 1 ? (<div className="itemstat2"><img src={search} alt=""></img></div>) : (<div className="itemstat1" onClick={(event)=> setSid(1)}><img src={search} alt=""></img></div>)}
            {sid === 2 ? (<div className="itemstat2"><img src={message} alt=""></img></div>) : (<div className="itemstat1" onClick={(event)=> setSid(2)}><img src={message} alt=""></img></div>)}
            {sid === 3 ? (<div className="itemstat2"><img src={acct} alt=""></img></div>) : (<div className="itemstat1" onClick={(event)=> setSid(3)}><img src={acct} alt=""></img></div>)}
        </div>)}
        {sid === 2 && (<div className="statcom">
            <div className='isitem21'>
            <span>Comments</span>
            <div onClick={(event)=> setSid(props.iod)}>
                <div className="x1"></div>
                <div className="x2"></div>
            </div>
          </div>
          <div className='statcom22'>
          <div className='gen-msg'>
               <Incom />
               <Incom />
               <Incom />
          </div>
          </div>
          <div className="classinput">
            <input type="text" placeholder="Post a comment"></input>
            <div><img src={send} alt=""></img></div>
          </div>
          </div>) 
          }
          {sid === 3 && (<div className="statcox">
          <div className="cox1" onClick={() => navigate('/login')}><h3><Link className="ink1" to="/login">Sign in</Link></h3></div>
            <div className="cox2" onClick={() => navigate('/register')}><h3><Link className="ink2" to="/register">Sign up</Link></h3></div>
          </div>)}
        </>
    );
}