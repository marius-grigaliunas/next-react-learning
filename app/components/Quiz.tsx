"use client"
import React, {useState} from 'react'


export const Quiz = () => {
    
    const questions = [
        {
            question:"How does your skin feel?",
            answers: [
                "Dry",
                "Oily",
                "Sensitive",
            ],
            id:0
        }
        ,
        {
            question:"Do you have a problem with?",
            answers: [
                "Blackheads",
                "Pimples",
                "Acne",
            ],
            id:1
        }
    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)


    const handleAnswerSelection = (answer : string) => {
        if(selectedAnswer === answer) {
            setSelectedAnswer(null)
        }
        else
            setSelectedAnswer(answer)
    }
    
    const handleNextQuestion = () => {
        if(selectedAnswer) {
            setCurrentQuestionIndex(prev => prev + 1)
            setSelectedAnswer(null)
        }
    }

    const currentQuestion = questions[currentQuestionIndex]

    return (
        <div>
            <div key={currentQuestion.id} className='flex justify-center'>
                <div className='flex w-7/12 pl-5 pr-5 items-center justify-end'>
                    <h3 className='flex-wrap text-3xl font-bold text-black drop-shadow-md'>{currentQuestion.question}</h3>
                </div>
                <ul className='w-5/12'>
                    {currentQuestion.answers.map((answer) => (
                        <button 
                        key={answer}
                        onClick={() => handleAnswerSelection(answer)}
                        className={`flex border-black border-2 rounded-lg px-10 w-40 my-2
                        hover:bg-blue-400 hover:text-white
                         ${selectedAnswer === answer 
                         ? `bg-blue-500 text-white`
                         : `bg-inherit text-black`}
                        `}>
                        {answer}
                        </button>
                    ))}
                </ul>
            </div>
            <div className='flex justify-center '>
                <button 
                key={"next"}
                onClick={handleNextQuestion} 
                className={`border-black border-2 rounded-lg px-6 mt-5 w-40 text-2xl text-white 
                 ${selectedAnswer
                 ? `bg-green-700 hover:bg-green-500 hover:border-white`
                 : `bg-gray-500 hover:bg-gray-600`}
                `}>
                Next
                </button>
            </div>
        </div>
  )
}
