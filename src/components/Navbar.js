import "../App.css";
import logo from "../icons/logo.png";
import cart from "../icons/cart.png";
import cartegory from "../icons/category.png";
import search from "../icons/search.png";
import account from "../icons/account.png";
import Sectins from "./sections";
import { useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const [inpu, setInpu] = useState("");
    const [toggle, setToggle] = useState(false);
    const [togle, setTogle] = useState(false);
    const [menu, setMenu] = useState(false);
    const [searche, setSearche] = useState(false);
    const keywords = ["airpod", "apple", "avater"]
    const navigate = useNavigate();
   function handlechange(event){
   setInpu(event.target.value);
   }
   algo();
   function algo(){
    let wordsep = inpu.split("");
    let newer = [];
    for(let k = 0; k < keywords.length; k++){
        for(let i =0; i < wordsep.length; i++){
            if(keywords[k].includes(wordsep[i])){
                if(newer.length === 0){
                    newer.push([keywords[k], 1])
                }
                else{
                for(let j = 0; j < newer.length; j++){
                    if(newer[j].includes(keywords[k])){
                        let dif = newer[j][1]
                        newer[j][1] =  dif +1;
                        break;
                    }else if(j === newer.length -1){
                        newer.push([keywords[k], 0])
                    }
                }
            }
            }
        }
    }
    
    for (let l = 0; l < newer.length; l++){
        for (let y = 0; y < newer.length; y++){
            let pair = y+1;
            if(y+1 === newer.length){
                break
            }else if (newer[y][1] < newer[pair][1]){
                let temp = newer[y];
                newer[y] = newer[pair];
                newer[pair] = temp;
            }
        }
    }
   }
   function hanf(){
    setSearche(false);
   const res = document.querySelector(".input");
    res.value = "";
   }
    return(
    <div className="nav">
    <div className="nav-top">
    {!searche && (    <div className="menu" onClick={() => setMenu(!menu)}>
            <div className="bar1"></div>
            {menu ? (<div className="bar2"></div>) : (<div className="bar1"></div>)}
            <div className="bar1"></div>
    </div>)}
    <img src={logo} alt="cloud" className="logo"></img>
    <div className="categories" onClick={() => setToggle(!toggle)}>
        <img src={cartegory} alt="category"></img>
        <span>categories</span>
    </div>
    <div className={`search${searche ? ("-new") : ("")}`} onClick={()=> setSearche(true)}>
        <input className="input"  placeholder="Search Cloud" value={searche ? inpu : ("")} autoComplete="off" onChange={(event) => handlechange(event)}></input>
        <div><img src={search} alt="search"></img></div>
    </div>
    {!searche && (<div className="menu" onClick={()=> navigate("/cart")}>
    <img src={cart} alt="cart"></img>
        <span className="dot">
          <span>0</span>
        </span>
    </div>)}
    {searche && (<div className="search-canc" onClick={()=> hanf()}><div></div><div></div></div>)}
    <div className="account" onClick={() => setTogle(!togle)}>
        <img src={account} alt="account"></img>
        <span>Account</span>
    </div>
    <div className="cart" onClick={() => navigate("/cart")}>
        <img src={cart} alt="cart"></img>
        <div className="dot">
          <span>0</span>
        </div>
    </div>
    </div>
    <div className="middle">
        <div className="underline"></div>
    </div>
    <div className="nav-bottom">
        
    </div>
        {toggle && (
        <div className="sections">
       <div className="sections-side">
       <Sectins title="Apparel & Accessories" />
       <Sectins title="Consumer Electronics" />
       <Sectins title="Beauty" />
       <Sectins title="Home & Garden" />
       <Sectins title="Sport & Entertainment" />
       <Sectins title="Gifts" />
       <Sectins title="Books" />
    </div>
    <div className="sections-main"></div>
    </div>)}
    {menu && (
        <div className="mennu">
            <span className="gg"><img src={cartegory} alt=""></img>Categories</span>
            <span className="mall">Apparel & Accessories</span>
            <span className="mall">Consumer Electronics</span>
            <span className="mall">Beauty</span>
            <span className="mall">Home & Garden</span>
            <span className="mall">Sport & Entertainment</span>
            <span className="mall">Gifts</span>
            <span className="mall">Books</span>
            <span className="ig"><img src={account} alt=""></img>Myaccount</span>
            <span className="mall">Sign in</span>
            <span className="mall">Sign up</span>
            <span className="g-cart"><span className="ig"><img src={cart} alt=""></img>Mycart</span><span className="all-cart">0</span></span>
        </div>
    )}
    {togle && (
    <div className="ant">
            <div className="ant1" onClick={() => navigate('/login')}><h3><Link className="ink1" to="/login">Sign in</Link></h3></div>
            <div className="ant2" onClick={() => navigate('/register')}><h3><Link className="ink2" to="/register">Sign up</Link></h3></div>
    </div>)}
    {searche && (<div className="res-search">
        <div className="swink2">
            {/* <div className="diiv">
            <div className="diive">
            <span className="diive-spa"><span className="diive-title">Fashion</span><span className="diive-cart">Add to cart</span></span>
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
            </div> */}
           <div className="load-diiv">
            <div className="load-diive">
            <span className="load-diive-spa"><span className="load-diive-title"></span><span className="load-diive-cart"></span></span>
            <span className="load-diive-span"></span>
            </div>
            <div className="load-diive">
                <div className="load-res-search-img"></div>
                <div className="load-res-search-desc">
                    <span></span>
                    <span></span>
                </div>
                </div>
            </div>
           <div className="load-diiv">
            <div className="load-diive">
            <span className="load-diive-spa"><span className="load-diive-title"></span><span className="load-diive-cart"></span></span>
            <span className="load-diive-span"></span>
            </div>
            <div className="load-diive">
                <div className="load-res-search-img"></div>
                <div className="load-res-search-desc">
                    <span></span>
                    <span></span>
                </div>
                </div>
            </div>
        </div>
    </div>)}
    </div>
    );
    }