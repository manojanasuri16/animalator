import React, { useState } from "react";
import "./styles.css";

const animalEmojis = {
  "π": "Monkey",
  "π¦": "Gorilla",
  "π": "Dog",
  "π": "Cat",
  "π": "Rabbit",
  "π": "Tiger",
  "π": "Horse",
  "π¦": "Rhinoceros"
};

const emojisList = Object.keys(animalEmojis);

export default function App() {
  const [meaning, setMeaning] = useState("");

  const inputChangeHandler = (event) => {
    let userInput = event.target.value;
    let meaning = animalEmojis[userInput];
    if (meaning === undefined) {
      meaning = "error, unknown emoji";
    }
    setMeaning(meaning);
  };

  const emojiClickHandler = (emoji) => {
    let meaning = animalEmojis[emoji];
    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>πHello Animalsπ¦</h1>
      <input
        placeholder="Enter emoji to get its meaning"
        onChange={inputChangeHandler}
      ></input>
      <h3>{meaning}</h3>
      {emojisList.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
