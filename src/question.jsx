import React from "react";

const Question = ({question , optionButton , nextques}) => {
  
    return(
        <>
        <h2>{question.question}</h2>
        <div>{question.options.map((option,index)=>(
         <div className="option">
         <button 
         key={index}
         onClick={()=>optionButton(option)}
         >
            {option}
         </button>
         </div>
        ))}
        <div className="next">
        <button onClick={nextques}>Next</button>
        </div>
        </div>
        </>
    )
}

export default Question