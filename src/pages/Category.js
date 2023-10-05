import left2 from '../icons/left2.png'
import filter from '../icons/filter.png'
import Ski from "../components/ski"
import { useNavigate } from 'react-router-dom';

export default function Category() {
  const navigate = useNavigate()
    return (
        <>
         <div className="catergo">
         <span className="spanisitem"><div><img onClick={()=> navigate(-1)} src={left2} alt=""></img></div><span className="sorry-text">Categories</span></span>
         <div className="catergohead"><img src={filter} alt=""></img><span>Filter</span></div>
         <div className='heite'>
          <span>Apparels & accessories</span>
        <div className="blur">
        <Ski />
        <Ski />
        <Ski />
        <Ski />
        <Ski />
        <Ski />
        </div>
         </div>
         <div className='heite'>
          <span>Consumer Electronics</span>
        <div className="blur">
        <Ski />
        <Ski />
        <Ski />
        <Ski />
        <Ski />
        <Ski />
        </div>
         </div>
         <div className='heite'>
          <span>Beauty</span>
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