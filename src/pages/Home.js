import {Helmet} from "react-helmet"
import ski from '../images/ski.jpg'
import fashion from "../images/cat-fashion.jpg"
export default function Home() {
    return (
        <>
         <div className="main">
      <Helmet><title>Cloud | Home</title></Helmet>
      <section className="main1">
            <img src={ski} alt=""></img>
           </section>
           <section className="main-main">
           <section className="main2">
           < div className="main21">
            <span className="main21-span"></span>
            <div className="main21-div">
             <div className="ghht"><div className="catergor"><span>Fashion</span><img alt="" src={fashion}></img></div></div>
             <div className="ghht"><div className="catergor"><span>Fashion</span><img alt="" src={fashion}></img></div></div>
             <div className="ghht"><div className="catergor"><span>Fashion</span><img alt="" src={fashion}></img></div></div>
             <div className="ghht"><div className="catergor"><span>Fashion</span><img alt="" src={fashion}></img></div></div>
            </div>
           </div>
           <div className="main22">
           <div className="main21-div">
           <div className="ght" style={{backgroundColor: "pink"}}><div className="ght1"></div><div className="ght2"></div></div>
           </div>
           </div>
           </section>
           <div className="main23">
           <div className="main23x">
           <div className="main231">
            <img src={ski} alt=""></img>
           </div>
           <div className="main232">
            <span className="adff">Sign in for the best experience</span>
            <input type="button" value="Sign in"></input>
           </div>
           </div>
           <div className="main23y"></div>
           </div>
           </section>
            <section className="main3">
            <div className='heite'>
            </div>
            </section>
         </div>
         </>
    ); 
  }