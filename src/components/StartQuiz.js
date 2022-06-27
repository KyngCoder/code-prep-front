
import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AppContext } from '../context/context'

const StartQuiz = () => {
  const {quizName} = useContext(AppContext)
  const navigate = useNavigate()
  return (
    <div className="bg-gray-300 h-screen flex items-center justify-center">
      <div className="bg-white w-1/2 h-1/4 flex md:w-1/4 flex-col items-center justify-center shadow-md">
        <button className="bg-green-600 text-white p-2 rounded-md text-2xl" onClick={()=>navigate('/questions')}>Start Quiz</button>
        <div className="flex m-4 justify-between w-full px-8 text-lg text-white">
          <p className="bg-blue-600 rounded w-16 text-center mr-2 p-1">Easy</p>
          <p className="bg-blue-600 p-1 rounded">Javascript</p>
        </div>
      </div>
    </div>
  )
}

export default StartQuiz