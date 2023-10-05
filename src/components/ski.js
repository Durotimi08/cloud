import cart from "../icons/cart.png"
import icon5 from "../images/watch.png"

export default function Ski(){
    return(
        <div>
        <div className="ski">
        <div className="lke"></div>
        <div className="item-img"><img src={icon5} alt=""></img><span className="lik"><img src={cart} alt=""></img></span></div>
        <div className="item-desc">
            <span className='udt'>Apple 2021 16-inch macbook pro</span>
            <span className='udt'>$1,000</span> 
        </div>
        </div>
        </div>
    );
}