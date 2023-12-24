import React from "react";
import Markdown from "react-markdown";

const AnsCard = (props) => {

  return (
    <>
      <div className='p-5 flex bg-cyan-700 rounded-md'>
        <h1 className="font-bold text-xl">{props.prompt}</h1>
      </div>
      <div className="p-3 overflow-y-auto">
        
        <article className="prose prose-invert lg:prose-xl">
          <Markdown >{props.answer}</Markdown>
        </article>
      </div>
    </>      
  )
}

export default AnsCard;