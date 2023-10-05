import ghost from "../icons/ghost-img.png"
import {Helmet} from "react-helmet"
import { useNavigate } from "react-router-dom";

export default function Page(){
    const navigate = useNavigate()
    return (
        <>
        <Helmet><title>Cloud | Page not found</title></Helmet>
        <div className="page">
            <div className="pager">
            <div className="pager-nav">
                <ul>
                <li onClick={()=> navigate("/login")}>Login</li>
                <li onClick={()=> navigate("/register")}>Register</li>
                </ul>
            </div>
            </div>
             <div className="paging">
                <div className="paging1">
                    <span className="page1">Error 404 | Page not found</span>
                    <span className="page2">Hey Buddy</span>
                    <span className="page3"> We cant find your page on cloud.</span>
                    <div className="page-btn">
                        <span onClick={()=> navigate("/")}>Go Home</span>
                    </div>
                </div>
                <div className="paging2">
                    <img src={ghost} alt=""></img>
                    <div class="home__shadow"></div>
                </div>
             </div>
        </div>
        </>
    );
}