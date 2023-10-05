import apple from "../icons/apple.svg"
import facebook from "../icons/facebook.svg"
import google from "../icons/google.svg"
import logo from "../icons/logo.png"
import {Link, useNavigate} from "react-router-dom"
import {Helmet} from "react-helmet"
import {useState} from "react"
import Axios from "axios"

export default function Register() {
     const [toast, setToast] = useState(null)
     const [formdata, setFormdata] = useState({
          name: "",
          email: "",
          password: ""
     })
     function checktoast(pop){
          if(pop === "good"){
          setToast("good")
          }else if(pop ==="bad"){
          setToast("bad")
          }else{
          console.log(pop);
          return 
          }
     }
     const [error, setError] = useState(null);
     function handlechange (event){
          event.preventDefault();
          const {name, value} = event.target;
          setFormdata(prevFormData => ({
               ...prevFormData,
               [name]: value
          })
          )
     }
     const navigate = useNavigate();
     const handlesubmit = async e =>{
          e.preventDefault();
          setToast(null);
          setError(null);
          try{
         await Axios.post('/api/auth/register', formdata).then((data)=>{
         checktoast(data.data); 
           });
           }catch (err){
               setError("An error occurred");
          }
           }
    return (
         <div className="form">
          <Helmet>
            <title>Cloud | Sign up</title>
          </Helmet>
          <form>
               <h3><img src={logo} alt="cloud"></img>Sign up</h3>
               <div className="top">
                    <div><img src={apple} alt="apple"></img></div>
                  <div><img src={google} alt="google"></img></div>
                  <div><img src={facebook} alt="facebook"></img></div>
               </div>
               <p>or</p>
               {/* <span className="spa">{error}</span> */}
               <div className="form-mmid">
                    <input type="text" className="formin" name="name" placeholder="Name" onChange={(event) => handlechange(event)}></input>
                    <input type="email" className="formin" name="email" placeholder="Email" onChange={(event) => handlechange(event)}></input>
                    <input type="password" className="formin" name="password" placeholder="password" onChange={(event) => handlechange(event)}></input>
                    <input type="button"  className="submit" name="submit" value="Create account" onClick={handlesubmit}></input>
                    <span>Already have an account <Link className="lnkform" to="/login">Sign in?</Link></span>
               </div>
               {toast !== null &&  (<div className={`toast-${toast}`}>
               <div className="innertoast">
                    {toast === "good" ? (<span>Welcome to cloud</span>) : (<span>User already exists</span>)}
               </div>
          </div>)}
          </form>
         </div>
    );
  }