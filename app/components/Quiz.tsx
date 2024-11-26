import React from 'react'


export const Quiz = () => {
    
    const questions = [
        {
            question:"How does your skin feel?",
            answers: [
                "Dry",
                "Oily",
                "Sensitive",
            ],
            id:1
        }
    ]

    return (
        <div>
            Quiz
            { questions.map((question) => (
                <div key={question.id} className='flex justify-center'>
                    <div className='flex w-7/12 pl-5 pr-5 items-center justify-end'>
                        <h3 className='flex-wrap text-3xl font-bold'>{question.question}</h3>
                    </div>
                    <ul className='w-5/12'>
                        {question.answers.map((answer) => (
                            <button key={answer} className='flex border-black border-2 rounded-lg px-10 w-80 my-2'>{answer}</button>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
  )
}
