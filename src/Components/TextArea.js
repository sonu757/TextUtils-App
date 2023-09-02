import React, { useState } from "react";
import Footer from "./Footer";

export default function TextArea(prop) {
  const onChangeHandler = (eve) => {
    updateText(eve.target.value);
    let count = eve.target.value.match(/\./g);
    if (count === null) {
      updateSentence(0);
    } else {
      updateSentence(count.length);
    }
  };

  const changeToUpper = () => {
    updateText(text.toUpperCase());
  };

  const changeToLower = () => {
    updateText(text.toLowerCase());
  };

  const changeToPascal = () => {
    let pascal_arr = text.split(" ");
    for (let item in pascal_arr) {
      pascal_arr[item] = pascal_arr[item]
        .charAt(0)
        .toUpperCase()
        .concat(pascal_arr[item].substring(1).toLowerCase());
    }
    let arr_to_str = pascal_arr.join(" ");
    updateText(arr_to_str);
  };

  const replaceWords = () => {
    let old_word = prompt(
      "Enter the word you want to replace it from the given text"
    );
    let new_word = prompt(
      "Enter the word you want it to be replaced with the old word"
    );
    let arr = text.split(" ");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === old_word) {
        arr[i] = new_word;
      }
    }
    updateText((document.getElementById("text").value = arr.join(" ")));
  };

  const convertToBullet = () => {
    let points = text.replaceAll(/\n/g, "").split(".");
    updateText((document.getElementById("text").value = ""));
    for (let i = 0; i < points.length - 1; i++) {
      updateText(
        (document.getElementById("text").value += "* " + points[i] + ".\n\n")
      );
    }
    console.log(points);
  };

  const clearText = () => {
    updateText("");
    updateSentence(0);
  };

  const [text, updateText] = useState(prop.defaultText);
  const [sentence, updateSentence] = useState(0);
  return (
    <>
      <div className="container">
        <div className="my-5">
          <label
            htmlFor="text"
            className="form-label"
            style={{ marginBottom: "1.5rem" }}
          >
            <h2 id="title_nav">Text Utilities</h2>
          </label>
          <textarea
            className="form-control"
            id="text"
            rows="16"
            placeholder="Enter Text Here"
            value={text}
            onChange={onChangeHandler}
          ></textarea>
          <button
            className="btn btn-outline-dark my-2 mx-2"
            onClick={changeToUpper}
          >
            Change To UpperCase
          </button>
          <button
            className="btn btn-outline-dark my-2 mx-2"
            onClick={changeToLower}
          >
            Change To LowerCase
          </button>
          <button
            className="btn btn-outline-dark my-2 mx-2"
            onClick={changeToPascal}
          >
            Change To PascalCase
          </button>
          <button
            className="btn btn-outline-dark my-2 mx-2"
            onClick={replaceWords}
          >
            Replace Words
          </button>
          <button
            className="btn btn-outline-dark my-2 mx-2"
            onClick={convertToBullet}
          >
            Bullet Points
          </button>
          <button
            className="btn btn-outline-dark my-2 mx-2"
            onClick={clearText}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="bg-dark"
        style={{
          height: "6vh",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
        id="footer"
      >
        <Footer sentence={sentence} text={text} />
      </div>
    </>
  );
}
