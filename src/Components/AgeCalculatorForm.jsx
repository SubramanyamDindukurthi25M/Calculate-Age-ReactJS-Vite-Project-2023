import { useState } from "react"

export const AgeCalculatorForm = ({passProps}) => {
    const [birthDate, setBirthDate] = useState('')
    const handleBirthDate = (e) => setBirthDate(e.target.value)

    const handleSubmitBirthDate = (e) => {
        e.preventDefault()
        passProps(birthDate)
    }

    return (
        <>
            <form>
                <input 
                    type="date" 
                    value={birthDate}
                    onChange={handleBirthDate}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button 
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={handleSubmitBirthDate}
                    disabled={!birthDate}
                >
                    calculate age
                </button>
            </form>
        </>
    )
}