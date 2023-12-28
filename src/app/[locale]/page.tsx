'use client'

import Header from "@/components/Header"
import Main from "@/components/Main"
import { useAppContext } from "../../../AppContext"

export default function Home() {
  const { state: { themeMode } } = useAppContext()
  return (
    <div className={`${themeMode === "dark" ? "dark" : "light"} h-full flex flex-col`}>
      <Header />
      <Main />
    </div>
  )
}
