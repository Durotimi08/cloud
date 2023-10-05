import left2 from '../icons/left2.png'
import filter from '../icons/filter.png'
import Ski from "../components/ski"

export default function Category() {
    return (
        <>
         <div className="catergo">
         <span className="spanisitem"><div><img src={left2} alt=""></img></div><span className="sorry-text">Category / Fashion</span></span>
         <div className="catergohead"><img src={filter} alt=""></img><span>Filter</span></div>
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
         
         </>
    );
  }