import del from '../icons/del.png'
import cart from '../icons/cart2.png'
import left2 from '../icons/left2.png'
import {Helmet} from "react-helmet"
import { useNavigate } from "react-router-dom";

export default function Cart() {
     const navigate = useNavigate();
    return (
     <>
     <Helmet><title>Cloud | Cart</title></Helmet>
         <div className="main">
          <div className="cartpageside">
          <div className="cartpageside1">
          </div>
          <div className="correct">
          <div className="cartpageside2">
               <div className="cart-head"><img className="cart-back" onClick={()=> navigate(-1)} src={left2} alt=""></img><span>Cart</span><div><img src={del} alt=""></img></div></div>
               <div className="cart-body">
          <div className="cart-diiv">
            <div className="diive">
            <span className="diive-spa"><span className="diive-title">Fashion</span><span className="diive-carti">Remove from cart</span></span>
            <span className="diive-span"></span>
            </div>
            <div className="diive">
                <div className="res-search-img"></div>
                <div className="res-search-desc">
                <div className="res-desc-1">
                    <span>Apple macbook pro</span>
                    <span>$1,000</span>
                    </div>
                    <div className="res-search-2">
                    <span>+</span>
                        <span>1</span>
                        <span>-</span>
                    </div>
                </div>
                </div>
            </div>
               </div>
               <div className="almost">
                    <div className="total"><span>Total:</span><i>$1,000</i></div>
                    <div className="discount"><span>Coupon code:</span><input type="text"name="code" placeholder="coupon code"></input></div>
               </div>
          <div className="final"><img src={cart} alt=""></img>Checkout</div>
          </div>
          </div>
          </div>
         </div>
         </>
    );
  }