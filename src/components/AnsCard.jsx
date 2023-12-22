import React from "react";
import { Markup } from "interweave";

const AnsCard = (props) => {
  
  const formattedText = props.answer.replace(/\*\*(.*?)\*\*/g, '<span class="h3-bold">$1</span>');

  return (
    <>
      <div className='p-2 flex bg-cyan-700 rounded-md'>
        <h1 className="font-bold">{props.prompt}</h1>
      </div>
      <div>
        <Markup content={props.answer}/>
      </div>
    </>      
  )
}

export default AnsCard;