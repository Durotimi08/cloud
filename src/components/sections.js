import icongo from "../icons/go.png"

export default function Sectins(props) {
 return (
      <div className="carter">
      <div className="carte">
      <li>{ props.title }</li>
      <img src={icongo} alt=""></img>
      </div>
      </div>
 );
}