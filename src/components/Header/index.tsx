import Button from "../common/Button"
import { MdLightMode, MdDarkMode } from "react-icons/md"

export default function Header() {
    return (
        <header className="p-2 flex justify-end dark:bg-gray-900 dark:bg-gray-300 bg-gray-300 bg-gray-900">
            <Button
                icon={MdLightMode}
                variant="text"
                // onClick={() => { dispatch({ type: ActionType.UPDATE, field: "themeMode", value: themeMode === "dark" ? "light" : "dark" }) }}
            >
            </Button>
        </header>
    )
}
