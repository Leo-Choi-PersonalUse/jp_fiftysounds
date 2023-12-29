'use client'

import { useRef, useState, useEffect } from "react"
import { hiraganaSeion } from "../../words"
import { getRandomFromObject } from "@/utils/HelperUtil";

type QuestionCardProps = {
    questionsList?: any
}

export default function QuestionCard({ questionsList }: QuestionCardProps) {


    const [question, setQuestion] = useState({ key: '', value: '' })
    const [userinput, setUserinput] = useState('')
    const [isWrong, setIsWrong] = useState(false);

    const submitAnswer = (e: { key: string }) => {
        if (e.key === 'Enter') {
            if (question['value'].includes(userinput)) {
                setQuestion(getRandomFromObject(questionsList))
                setUserinput('')
                setIsWrong(false)
            }
            else {
                setIsWrong(true)
            }
        }
    }

    useEffect(() => {
        setQuestion(getRandomFromObject(questionsList))
    }, [questionsList])

    return (
        <div className="container">
            <div className="flex flex-col justify-center items-center p-2">
                <p className="text-9xl text-center">{question['key']}</p>
                <div>
                    <input className="p-2 text-gray-900 border-gray-300 border-2 rounded"
                        value={userinput}
                        onChange={(e) => { setUserinput(e.target.value) }}
                        onKeyPress={submitAnswer}
                    />
                    {isWrong ? <p className={`text-red-500`}>(錯誤)</p> : <></>}
                </div>
            </div>
        </div>
    )
}

