import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenRuler, faTasks } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
const CardItemsArray = [
  {
    id: 1,
    title: "Front End",
    li: ["HTML /CSS", "Bootstrap", "Sass", "JavaScript", "React.js"],
    selector: true,
    icon: faPenRuler,
    classTitle: "card-title",
    classCirle: "card-circle",
  },
  {
    id: 2,
    title: "Back End",
    li: ["Node.js", "Express.js", "Rest Api", "Nodemailer", "Fetch Api"],
    selector: true,
    icon: faGear,
    classTitle: "card-title2",
    classCirle: "card-circle2",
  },
  {
    id: 3,
    title: "Tools",
    li: ["VS Code", "Git/Github", "Terminal", "Heroku/Netlify", "Figma"],
    selector: true,
    icon: faToolbox,
    classTitle: "card-title3",
    classCirle: "card-circle3",
  },
];

function Cards() {
  // const [select, setSelect] = useState(true);
  return (
    <div id="card-parent">
      <>
        {CardItemsArray.map((card) => {
          console.log(card);
          return (
            <>
              <div key={card.id} className="card-container">
                <div key={card.id} className="card">
                  <div key={card.id} className={card.classCirle}>
                    <FontAwesomeIcon icon={card.icon}></FontAwesomeIcon>
                  </div>
                  <div className={card.classTitle}>
                    <h3 key={card.id}>{card.title}</h3>
                  </div>
                  <div className="card-items">
                    <ul>
                      {card.li.map((list) => (
                        <li>{list}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    </div>
  );
}
export default Cards;
