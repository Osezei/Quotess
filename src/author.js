import React, { useState } from "react";
import section from "./data";
import "./index.css";

const Author = () => {
  const [index, setIndex] = useState(0);
  const { info, author } = section[index];

  const randomPage = () => {
    const checkNumber = (number) => {
      if (number > section.length - 1) {
        return 0;
      }
      if (number < 0) {
        return section.length - 1;
      }
      return number;
    };
    let randomNumber = Math.floor(Math.random() * section.length);
    console.log(randomNumber);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main>
      <div className="container">
        <div className="items">
          <div className="text-container">
            <p>{info}</p>
            <h2>"{author}"</h2>
          </div>

          <div className="btn-container">
            <button onClick={randomPage}>hit me</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Author;
