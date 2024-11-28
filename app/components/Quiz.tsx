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
            id:3
        },
        {
            question:"Do you have a problem with?",
            answers: [
                "Blackheads",
                "Pimples",
                "122Acne",
            ],
            id:2
        },
        {
            question:"Do you have a problem with?",
            answers: [
                "Bla2323ckheads",
                "Pimples",
                "Acne",
            ],
            id:1
        },
        {
            question:"Do you have a problem with?",
            answers: [
                "Blackheads",
                "Pimples32323",
                "Acne",
            ],
            id:4
        },
        {
            question:"Do you have a problem with?",
            answers: [
                "Blackheads1",
                "Pimples1",
                "Acne1",
            ],
            id:5
        },
    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])


    const handleAnswerSelection = (answer : string) => {
        setSelectedAnswers(currentAnswers => 
            currentAnswers.includes(answer)
            ? currentAnswers.filter(a => a !== answer)
            : [...currentAnswers, answer]
        )
    }
    
    const handleNextQuestion = () => {
        if(selectedAnswers) {
            setCurrentQuestionIndex(prev => prev + 1)
            setSelectedAnswers([])
        }
    }

    const currentQuestion = questions[currentQuestionIndex]

    return (
        <div>
            <div key={currentQuestion.id} className='flex justify-center'>
                <div className='flex w-7/12 pl-5 pr-5 items-center justify-end'>
                    <h3 className='flex-wrap text-3xl font-bold text-black drop-shadow-md '>{currentQuestion.question}</h3>
                </div>
                <ul className='w-5/12'>
                    {currentQuestion.answers.map((answer) => (
                        <button 
                        key={answer}
                        onClick={() => handleAnswerSelection(answer)}
                        className={`flex border-black border-2 rounded-lg px-10 w-40 my-2
                        hover:bg-baby-sky hover:text-white
                         ${selectedAnswers.includes(answer) 
                         ? `bg-blue-400 text-white`
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
                disabled={selectedAnswers.length === 0}
                onClick={handleNextQuestion} 
                className={`border-black border-2 rounded-full px-6 mt-5 w-30 text-xl text-white 
                 ${selectedAnswers.length > 0
                 ? `bg-kinda-tuirquoise hover:bg-l-k-turquoise hover:border-white`
                 : `bg-gray-500 hover:bg-gray-600`}
                `}>
                Next
                </button>
            </div>
        </div>
  )
}
