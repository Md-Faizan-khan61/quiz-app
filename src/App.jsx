import React, { useEffect, useState } from "react";
import Question from "./question";
import './App.css'
import Result from "./result";
function App() {

  const [index , setIndex] = useState(0)
  const [score , setScore] = useState(0)
  const [showScore , setShowScore] = useState(false)
  const [selectedOption , setSelectedOption] = useState(null)
   const QuizQuestions = [
    {
        question:"Q.1 which one of the following is a framework ?",
        options:['Vuejs','Reactjs','Nodejs','ExpressJs'],
        answer:'ExpressJs'
    },
    {
        question:"Q.2 which one of the following is a frontend library ?",
        options:['Mongodb','React','Nodejs','ExpressJs'],
        answer:'React'   
    },
    {
        question:"Q.3 which one of the following is version control system ?",
        options:['Mongodb','Reactjs','Nodejs','Git'],
        answer:'Git'  
    }    
   ]
     useEffect(()=>{
      console.log(selectedOption);
     },[selectedOption])  

   const optionButton = (option) => {
       setSelectedOption(option)
      // console.log(selectedOption);
      //  if(isCorrect){
      //   setScore(score + 1)
      //  }
      //  console.log(isCorrect);
   }

   const nextques = () => {
    if(selectedOption === QuizQuestions[index].answer)
    {
        setScore(score + 1)        
     }
    //  console.log(score);
    const nextQuestion = index + 1;
       if(nextQuestion < QuizQuestions.length )
        {
          setIndex(nextQuestion);
        }
        else{
          setShowScore(true)
        }
   }

    return(
     <div>     
     {showScore ? (<Result  score={score} QuizQuestions={QuizQuestions.length}/>):
     (<Question  question={QuizQuestions[index]} optionButton={optionButton} nextques={nextques}/>)}
     </div>
    )
}

export default App