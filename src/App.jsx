import { useState } from "react"
import { AgeCalculatorForm } from "./Components/AgeCalculatorForm"
import { AgeResult } from "./Components/AgeResult"
import { differenceInDays, differenceInMonths, differenceInYears } from "date-fns"

export const App = () => {
  const [age, setAge] = useState(null)

  // pass callback function as props to child
  const handlePassProps = (birthDate) => {
    const today = new Date()
    const birthDateObject = new Date(birthDate)

    // Invoke differenceInYears
    const resultYears = differenceInYears(today, birthDateObject)
    const resultMonths = differenceInMonths(today, birthDateObject)
    const resultDays = differenceInDays(today, birthDateObject)

    const finalResult = {
      year: resultYears,
      month: resultMonths,
      days: resultDays
    }
    setAge(finalResult)
  }

  return (
    <>
      <header className="mt-20 text-center capitalize">
        <h1 className="font-extrabold text-5xl">
          age calculator
        </h1>
        <p className="mt-2 text-gray-600 font-mono">
          track your life's progress: age in years,months, and days!
        </p>
      </header>
      <main>
        <AgeCalculatorForm
          passProps={handlePassProps}
        />
        {
          age && <AgeResult finalResult={age}/>
        }
      </main>
    </>
  )
}