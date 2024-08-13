import image from './contact.jpg';
import './Contact.css';

 function Contact(){
    return (
        <form>
            <center><h1>Contact_us</h1></center>
            <div className="aaaC">
      <img src={image} alt="logo"/><br/>
    </div><br/>
    
        <div className="abc">
            <lable>Enter Your Name:</lable>
             <input type="text" id="name" required/> <br/> 
            <lable>Enter Your Email:</lable>
             <input type="text" id="email" required/> <br/>
            <lable>Enter Mobiles No:</lable>
             <input type="text" id="mobile" pattern="[0-9]{10}" required/> <br/>
            <lable> Message:</lable>
             <textarea id="Message"  ></textarea> <br/>
             <center><input type="Submit"class="button" value="SEND MESSAGE"/></center>   <br/>
             </div>
             
        </form>

    );
 };
 export default Contact;