import icon1 from "../icons/shoes.png"
import icon2 from "../icons/shirt.png"
import icon4 from "../images/watch.jpg"
import icon5 from "../images/watch.png"
import icon3 from "../icons/trou.png"
import love from "../icons/love.png"
import loved from "../icons/loved.png"
import cart from "../icons/cart.png"
import { useState } from "react"

export default function Section2(){
    const [lover, setLover] = useState(love)
    return(
        <div className="main22">
        <div className="main222">
        <div className="main225">
            <img src={icon4} alt=""></img>
        </div>
            <div className="main224">
                <img src={icon1} alt=""></img>
                <img src={icon2} alt=""></img>
                <img src={icon3} alt=""></img>
            </div>
        </div>
        <div className="main223">
        <div className="ski">
                <div className="lke"></div>
                <div className="item-img"><img src={icon5} alt=""></img><span className="lik" onClick={()=> setLover(loved)}><img src={lover} alt=""></img></span></div>
                <div className="item-desc">
                    <span className='udt'>Apple 2021 16-inch macbook pro</span>
                    <span className='udt'>$1,000</span> 
                    <span className="addc">
                    <span className="addc2">Details</span>
                    <span className="addc1"><img src={cart} alt=""></img></span>
                </span>
                </div>
            </div>
        <div className="ski">
                <div className="lke"></div>
                <div className="item-img"><img src={icon5} alt=""></img><span className="lik" onClick={()=> setLover(loved)}><img src={lover} alt=""></img></span></div>
                <div className="item-desc">
                    <span className='udt'>Apple 2021 16-inch macbook pro</span>
                    <span className='udt'>$1,000</span> 
                    <span className="addc">
                    <span className="addc2">Details</span>
                    <span className="addc1"><img src={cart} alt=""></img></span>
                </span>
                </div>
            </div>
        <div className="ski">
                <div className="lke"></div>
                <div className="item-img"><img src={icon5} alt=""></img><span className="lik" onClick={()=> setLover(loved)}><img src={lover} alt=""></img></span></div>
                <div className="item-desc">
                    <span className='udt'>Apple 2021 16-inch macbook pro</span>
                    <span className='udt'>$1,000</span> 
                    <span className="addc">
                    <span className="addc2">Details</span>
                    <span className="addc1"><img src={cart} alt=""></img></span>
                </span>
                </div>
            </div>
        </div>
        </div>
    );
}