import './App.css'
import Navbar from './components/Navbar/Navbar'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'
import { useContext } from "react"
import { themeContext } from './context/themeContext'

function App() {

  const theme = useContext(themeContext)

  const router = useRoutes(routes)

  return (
    <>
      <div className={`${theme?.theme} w-screen h-screen m-auto p-0 sm:py-8 border  overflow-x-hidden sm:bg-yellow-200`}>
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 sm:border-[14px] rounded-[2.5rem] h-screen w-screen sm:h-[685px] sm:w-[343px] overflow-hidden">
          <div className="rounded-none sm:rounded-[2rem] overflow-hidden w-full h-full sm:w-[315px] sm:h-[655px] dark:bg-gray-800 bg-white dark:text-gray-100">
            {router}
            <Navbar />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
