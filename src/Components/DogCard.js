import React, {useState} from "react";

function DogCard({img, name, breed}) {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="card">
      <span className="content">
        <h2 >{name}</h2>
        <img alt="" src={img} />
      </span>
      <span className="bark">
        <button onClick={() => {
          setToggle(!toggle);
        }}>Bark</button>
      <h4 style={{ display: toggle ? "block" : "none" }}>Bark</h4>
      </span>
    </div>
  );
}

export default DogCard;
