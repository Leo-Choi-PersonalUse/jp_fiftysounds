'use client'

import { useAppContext } from "../../../AppContext"
import { useState, useEffect } from "react"
import { ActionType } from "../../../reducers/AppReducer"

interface ActiveSelections {
    [key: string]: boolean;
}

const a: ActiveSelections = {
    "hiraganaSeion": false,
    "hiraganaDakuon": false,
    "hiraganaHandakuon": false,
    "hiraganaYoon": false,
    "katakanaSeion": false,
    "katakanaDakuon": false,
    "katakanaHandakuon": false,
    "katakanaYoon": false,
};

export default function SelectionBoard() {

    const { state: { activeSelections }, dispatch } = useAppContext()

    const handleClick = (selection: string) => {
        if (isLast(selection) === true && activeSelections[selection] == true) return;
        const newActiveSelections = { ...activeSelections };
        newActiveSelections[selection] = !newActiveSelections[selection];
        dispatch({ type: ActionType.UPDATE, field: 'activeSelections', value: newActiveSelections });
    };

    const handleClick2 = (selection: string) => {

        if (isAllTrue(selection) === true) return;

        const newActiveSelections = { ...activeSelections };
        newActiveSelections[selection + "Seion"] = true
        newActiveSelections[selection + "Dakuon"] = true
        newActiveSelections[selection + "Handakuon"] = true
        newActiveSelections[selection + "Yoon"] = true
        dispatch({ type: ActionType.UPDATE, field: 'activeSelections', value: newActiveSelections });
    };

    function isAllTrue(selection: string) {
        return (
            activeSelections[selection + "Seion"] === true &&
            activeSelections[selection + "Dakuon"] === true &&
            activeSelections[selection + "Handakuon"] === true &&
            activeSelections[selection + "Yoon"] === true
        )
    }

    function isLast(selection: string) {
        let counter = 0;
        Object.entries(activeSelections).forEach(([key, value]: [string, boolean]) => {
            if (value === true) {
                counter++
            }
        });

        return (counter == 1) ? true : false;
    }



    return (
        <div className={`container`}>
            <div className={`grid grid-cols-1 sm:grid-cols-5 gap-2`}>
                <div className={`${isAllTrue("hiragana") === true ? "bg-blue-500" : ""} p-2 border border-gray-500 rounded text-center`}
                    onClick={() => handleClick2("hiragana")}
                >
                    平假名
                </div>
                <div className={`${activeSelections['hiraganaSeion'] === true ? "bg-blue-500" : ""} p-2 border border-gray-500 rounded text-center`}
                    onClick={() => handleClick("hiraganaSeion")}
                >
                    清音</div>
                <div className={`${activeSelections['hiraganaDakuon'] === true ? "bg-blue-500" : ""} p-2 border border-gray-500 rounded text-center`}
                    onClick={() => handleClick("hiraganaDakuon")}
                >
                    濁音</div>
                <div className={`${activeSelections['hiraganaHandakuon'] === true ? "bg-blue-500" : ""} p-2 border border-gray-500 rounded text-center`}
                    onClick={() => handleClick("hiraganaHandakuon")}
                >
                    半濁音</div>
                <div className={`${activeSelections['hiraganaYoon'] === true ? "bg-blue-500" : ""} p-2 border border-gray-500 rounded text-center`}
                    onClick={() => handleClick("hiraganaYoon")}
                >
                    拗音</div>
                <div className={`${isAllTrue('katakana') === true ? "bg-blue-500" : ""} p-2 border border-gray-500 rounded text-center`}
                    onClick={() => handleClick2("katakana")}
                >
                    片假名</div>
                <div className={`${activeSelections['katakanaSeion'] === true ? "bg-blue-500" : ""} p-2 border border-gray-500 rounded text-center`}
                    onClick={() => handleClick("katakanaSeion")}
                >
                    清音</div>
                <div className={`${activeSelections['katakanaDakuon'] === true ? "bg-blue-500" : ""} p-2 border border-gray-500 rounded text-center`}
                    onClick={() => handleClick("katakanaDakuon")}
                >
                    濁音</div>
                <div className={`${activeSelections['katakanaHandakuon'] === true ? "bg-blue-500" : ""} p-2 border border-gray-500 rounded text-center`}
                    onClick={() => handleClick("katakanaHandakuon")}
                >
                    半濁音</div>
                <div className={`${activeSelections['katakanaYoon'] === true ? "bg-blue-500" : ""} p-2 border border-gray-500 rounded text-center`}
                    onClick={() => handleClick("katakanaYoon")}
                >
                    拗音</div>
            </div>
        </div>
    )
}
