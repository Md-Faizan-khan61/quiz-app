import React from "react";

const Result = ({ score , QuizQuestions}) => {
    return (
        <div>
         {(score == 3) ? (
        <h2>🎉Congratulation! your Score is {score} out of {QuizQuestions}</h2>
         )  
         :(
            <h2>`your Score is {score} out of {QuizQuestions}`</h2> 
         )}                          
        </div>
    )
}

export default Result