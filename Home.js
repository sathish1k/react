import image from './h1.jpg';
import './home.css';
function Home(){
    return(
    <div>
    <h1> Welcome to Home</h1>
    <div className="aaa">
      <img src={image} alt="logo"/> 
    </div>
    <h>About Us:</h>
    <p>With 5G smartphones the newest craze in the market, many buyers are looking for the best models money can buy. If you have a budget of Rs. 20,000 and want to invest in a 5G smartphone, this list is for you. Each smartphone on this list has received an overall rating of 8 or above from Gadgets 360, which means each device here will deliver on all fronts, from battery life, camera, design, display, performance, and software to value for money.
    </p>
    </div>
    );
  }

  export default Home;