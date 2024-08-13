import { Outlet, Link } from "react-router-dom";
import v1 from'./v1.jpg';
import v2 from'./v2.jpg';
import v3 from'./v3.jpg';
import v4 from'./v4.jpg';
import './vivo.css';
function Mobiles (){
    return(
        <div>
<div className="vvv1">
        <img src={v1} alt="logo"/>
        <center><Link to="/vivo">VIVO MOBILE </Link></center> <br/>
        </div>

 <div class="card-body">
    <h5 class="card-title"> OPPO RENO 6PRO (Aurora,256gb)</h5>
    <p class="card-text"><b>*****</b> <small class="text-mute"> (17,501)</small></p>
    <p class="card-text"> <b>15% off</b> <del>32,990</del> RS-27,990</p>
    <p class="card-text"> <small class="text-mute">Upto <b>RS-26,700</b>off on Exchange </small></p>
    <p class="card-text"> <small class="text-mute"> <b>Bank Offer</b></small></p>
    <p class="card-text"> <small class="text-mute">Free delivery by <b>15th jul</b></small></p>
 
</div><hr class="dropdown-divider"></hr>
]
        <div className="aaa1">
        <img src={v2} alt="logo"/>
        
 <div class="card-body">
    <h5 class="card-title"> OPPO RENO 6PRO (Aurora,256gb)</h5>
    <p class="card-text"><b>*****</b> <small class="text-mute"> (17,501)</small></p>
    <p class="card-text"> <b>15% off</b> <del>32,990</del> RS-27,990</p>
    <p class="card-text"> <small class="text-mute">Upto <b>RS-26,700</b>off on Exchange </small></p>
    <p class="card-text"> <small class="text-mute"> <b>Bank Offer</b></small></p>
    <p class="card-text"> <small class="text-mute">Free delivery by <b>15th jul</b></small></p>
 
</div><hr class="dropdown-divider"></hr>
        </div>

        <div className="aaa1">
        <img src={v3} alt="logo"/>
        
 <div class="card-body">
    <h5 class="card-title"> OPPO RENO 6PRO (Aurora,256gb)</h5>
    <p class="card-text"><b>*****</b> <small class="text-mute"> (17,501)</small></p>
    <p class="card-text"> <b>15% off</b> <del>32,990</del> RS-27,990</p>
    <p class="card-text"> <small class="text-mute">Upto <b>RS-26,700</b>off on Exchange </small></p>
    <p class="card-text"> <small class="text-mute"> <b>Bank Offer</b></small></p>
    <p class="card-text"> <small class="text-mute">Free delivery by <b>15th jul</b></small></p>
 
</div><hr class="dropdown-divider"></hr>
        </div>

        <div className="aaa1">
        <img src={v4} alt="logo"/>
        </div>

        </div>
        );
    };<Outlet />
    export default Mobiles;