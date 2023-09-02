import React from 'react'

export default function Footer({text,sentence}) {
  return (
    <>
        <span style={{ marginRight: "3vw" , color: "#f5f5dc"}}>
          Sentence = {sentence}
        </span>
        <span
          id="word_count"
          style={{ marginRight: "3vw", color: "#f5f5dc"}}
        >
          Word = {text.split(" ").filter((ele)=>{return ele.length>=1}).length}
        </span>
        <span style={{ marginRight: "3vw" , color: "#f5f5dc"}}>
          characters = {text.replace(/[\s]/g,'').length}
        </span>
        <span style={{ marginRight: "3vw" , color: "#f5f5dc"}}>
          Reading Time(Min) = {0.008 * text.split(" ").filter((ele)=>{return ele.length>=1}).length}
        </span>
    </>
  )
}
