import { Outlet, Link } from "react-router-dom";
import image0 from'./vivo.jpg';
import image1 from'./i phone.jpg';
import image2 from'./one plus.jpg';
import image3 from'./nokia.jpg';
import image4 from'./iqoo.jpg';
import image5 from'./oppo.jpg';
import image6 from'./realme.jpg';
import image7 from'./redmi.jpg';
import image8 from'./i phone.jpg';
import './mobile.css';
function Mobiles (){
    return(
        <div>
        
          <center><h1> <marquee>BUY YOUR STYLIES MOBILES </marquee> </h1></center>
        
    
        <div className="aaa1">
        <img src={image0} alt="logo"/>
        <center><Link to="/vivo">VIVO MOBILE </Link></center> <br/>
        </div>

        <div className="aaa1">
        <img src={image1} alt="logo"/>
        <center><Link to="/Contact">I PHONE </Link></center>  <br/>
        </div>

        <div className="aaa1">
        <img src={image2} alt="logo"/>
        <center><Link to="/Contact">ONEPLUS </Link></center> <br/>
        </div>
    

        <div className="aaa1">
        <img src={image3} alt="logo"/>
        <center><Link to="/Contact">NOKIA </Link></center> <br/>
        </div>

        <div className="aaa1">
        <img src={image4} alt="logo"/>
        <center><Link to="/Contact">IQOO </Link></center> <br/>
        </div>

        <div className="aaa1">
        <img src={image5} alt="logo"/>
        <center><Link to="/Contact">OPPO</Link></center> <br/>
        </div>

        <div className="aaa1">
        <img src={image6} alt="logo"/>
        <center><Link to="/Contact">REALME </Link></center> <br/>
        </div> 

        <div className="aaa1">
        <img src={image7} alt="logo"/>
        <center><Link to="/Contact">REDMI </Link></center> <br/>
        </div>

        <div className="aaa1">
        <img src={image8} alt="logo"/>
        <center><Link to="/Contact">SUMSUNG </Link></center> <br/>
        </div>
        
        </div>
        
    );
};<Outlet />
export default Mobiles;