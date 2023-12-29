'use client'

import { useTranslations } from 'next-intl';
import QuestionCard from '@/components/QuestionCard';
import SelectionBoard from '@/components/SelectionBoard';
import { useAppContext } from "../../../AppContext"
import { useState, useEffect } from "react"

import { hiraganaSeion, hiraganaDakuon, hiraganaHandakuon, hiraganaYoon, katakanaSeion, katakanaDakuon, katakanaHandakuon, katakanaYoon } from "../../words"

const _map = {
    "hiraganaSeion": hiraganaSeion,
    "hiraganaDakuon": hiraganaDakuon,
    "hiraganaHandakuon": hiraganaHandakuon,
    "hiraganaYoon": hiraganaYoon,
    "katakanaSeion": katakanaSeion,
    "katakanaDakuon": katakanaDakuon,
    "katakanaHandakuon": katakanaHandakuon,
    "katakanaYoon": katakanaYoon,
}

export default function Main() {
    const t = useTranslations('Index');
    const { state: { activeSelections } } = useAppContext()
    const [questionsList, setQuestionsList] = useState(hiraganaSeion)


    useEffect(() => {
        console.log(activeSelections)
        let temp: any;
        Object.keys(activeSelections).forEach(key => {
            if (activeSelections[key] === true) {
                console.log(key)
                temp = { ...temp, ..._map[key as keyof typeof _map] };
            }
        });

        console.log("temp")
        console.log(temp)

        setQuestionsList(temp)
    }, [activeSelections])


    return (
        <main className="p-2 h-full dark:bg-gray-700 dark:text-gray-300 bg-white text-gray-900">
            <h1 className="text-center">{t('title')}</h1>
            <SelectionBoard />
            <QuestionCard questionsList={questionsList} />
        </main>
    )
}
