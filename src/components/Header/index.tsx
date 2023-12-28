'use client'

import Button from "../common/Button"
import { MdLightMode, MdDarkMode } from "react-icons/md"
import { useAppContext } from "../../../AppContext"
import { ActionType } from "../../../reducers/AppReducer"


export default function Header() {
    const { state: { themeMode }, dispatch } = useAppContext()

    return (
        <header className="p-2 flex justify-end dark:bg-gray-900 dark:text-gray-300 bg-gray-300 text-gray-900">
            <Button
                icon={themeMode === "dark" ? MdLightMode : MdDarkMode}
                variant="text"
                onClick={() => { dispatch({ type: ActionType.UPDATE, field: "themeMode", value: themeMode === "dark" ? "light" : "dark" }) }}
            >
            </Button>
        </header>
    )
}
