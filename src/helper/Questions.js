import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../context/context";

const Questions = () => {

  const {quizName,level} = useContext(AppContext)

  const [correct,setCorrect] = useState(0)
  const [questions, setQuestions] = useState([]);
  const [questNum,setQuestionsNum] = useState(0)
  const [option,setOption] = useState('')
  const [limit,setLimit] = useState(false)
  

  const getQuestions = async () => {
    await axios
      .get(`https://code-prepp.herokuapp.com/quiz/search?title=${quizName}&level=${level}`)
      .then((res) => setQuestions(res.data.data));
  };

  const handleNext = () => {
    if(option === questions[questNum].answer){
      setCorrect(correct => correct + 1)
    }
    if(questNum !== questions.length-1){
      setQuestionsNum(num => num + 1)
    }
    else{
      setLimit(true)
      return 
    }
  }


  useEffect(() => {
    getQuestions();
  },[]);
  console.log(option)

  return (
    <div className="bg-blue-300 h-screen flex flex-col justify-between text-white items-center">
      <div className="m-4 text-3xl">
        <h1>Code Prep</h1>
        <p className="text-center">{correct}</p>
      </div>
      {
        questions.length?(
          <>
          <div className="shadow-lg rounded-md w-4/5 md:w-1/2">
        <div className="bg-green-500 rounded text-center py-2 ">
          <p>JavaScript Easy</p>
        </div>
        <div className="p-4">
          <div className="text-lg">
            <p>{questions[questNum].question}</p>
          </div>
          <div>
            <div className="flex py-2 ">
              <input type="radio" name="quest"   onClick={()=>setOption('A')}/>
              <p className="pl-2">{questions[questNum]?.A}</p>
            </div>
            <div className="flex py-2 ">
              <input type="radio" name="quest" onClick={()=>setOption('B')} />
              <p className="pl-2">{questions[questNum]?.B}</p>
            </div>
            <div className="flex py-2 ">
              <input type="radio" name="quest" onClick={()=>setOption('C')}/>
              <p className="pl-2">{questions[questNum]?.C}</p>
            </div>
            <div className="flex py-2 ">
              <input type="radio" name="quest" onClick={()=>setOption('D')} />
              <p className="pl-2">{questions[questNum]?.D}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 mb-8 p-4 w-4/5 md:w-1/2">
        <p>
          Something wrong with this quiz?{" "}
          <Link to="contact">Report question</Link>
        </p>
        {/* implement timeout */}
        {/* implement length tracker */}
        <div className="flex justify-between">
          <p>
            {questNum + 1}/<sub>{questions.length}</sub>
          </p>
          <button disabled={limit} onClick={()=>handleNext()}>Next</button>
        </div>
      </div>
      </>
        ):
        (
          <div>
          <p>No questions,Coming soon</p>
          </div>
        )
      }
    </div>
  );
};

export default Questions;
