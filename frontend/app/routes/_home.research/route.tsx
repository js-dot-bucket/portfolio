import "./style.css";
import {useNavigate} from "react-router-dom";

export default function Research() {
  return (
    <div className="researchPage">
      <div className="container">
        <div className="box1">
          <p>~/research</p>
          <input type="search" placeholder="> Search"/>
        </div>
        <div className="box2">
          <ResearchBox label="How to find xor in website having mulitile inputs" to="/research"/>
          <ResearchBox label="How to find xor in website having mulitile inputs" to="/research"/>
          <ResearchBox label="How to find xor in website having mulitile inputs" to="/research"/>
          <ResearchBox label="How to find xor in website having mulitile inputs" to="/research"/>
          <ResearchBox label="How to find xor in website having mulitile inputs" to="/research"/>
          <ResearchBox label="How to find xor in website having mulitile inputs" to="/research"/>
        </div>
      </div>
    </div>
  );
}

function ResearchBox({label, to}) {
  const navigate = useNavigate();
  const handleClick = () => navigate({to});

  return (
    <button onclick={handleClick}>{label}</button>
  );
};
