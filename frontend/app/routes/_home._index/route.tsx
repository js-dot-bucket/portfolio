import "./styles/home.css";
import profile from "./images/profile.png";
import {Link, useNavigate} from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/research');
  return (
    <div className="homePage">
      <div className="container">
        <p className="heroText">~/shubham</p>
        <p className="heroPara">
I’m passionate about exploring technology especially the web. I research, experiment, and break things (on purpose) to understand how they work.
        </p>
        <p className="heroPara">
This is where I document everything I learn raw insights, deep dives, and the occasional rant. If it’s tech and it sparks curiosity, you’ll find it here.
        </p>
        <div className="columnBox">
          <div className="box1">
            <ul>
              <li><Link to="/research">How to find xor in any website ...</Link></li>
              <li><Link to="/research">How to find xor in any website ...</Link></li>
              <li><Link to="/research">How to find xor in any website ...</Link></li>
              <li><Link to="/research">How to find xor in any website ...</Link></li>
              <li><Link to="/research">How to find xor in any website ...</Link></li>
            </ul>
            <button onClick={handleClick}>Explore more blogs &#8594; </button>
          </div> 
          <div className="box2">
            <div className="placeholder">
            </div>
            <div className="bgPlaceholder">
              <img src={profile} height="290px" alt="profile image"/>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}
