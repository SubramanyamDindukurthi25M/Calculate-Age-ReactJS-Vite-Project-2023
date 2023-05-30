export const AgeResult = ({finalResult}) => {
    const {
        year,
        month,
        days
    } = finalResult

    return (
        <div>
            <h4>
                You are {year} years , {month} months, and {days} days old.
            </h4>
        </div>
    )
}