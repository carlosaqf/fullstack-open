import React, { useState } from 'react'
import { Button } from '../App'

const Statistics = ({text, value}) => {
    if (value === 0){
        return(
            <p>No feedback given</p>
        )
    }
    return(
        <p>{text} - {value}</p>
    )
}


const UnicafeApp = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const updateFeedback = (fbFn, fbVal) => () => fbFn(fbVal + 1)

    const total = (good + neutral + bad)
    const average = ((good - bad) / total)
    const positiveValue = (good / total * 100)


    return(
        <div>
           <h1>Give Feedback</h1>
            <Button 
                onClick={updateFeedback(setGood, good)}
                text="Good"
            />
            <Button 
                onClick={updateFeedback(setNeutral, neutral)}
                text="Neutral"
            />
            <Button 
                onClick={updateFeedback(setBad, bad)}
                text="Bad"
            />

            <h1>Statistics</h1>
            <div>
                <Statistics text="good" value={good} />
                <Statistics text="neutral" value={neutral} />
                <Statistics text="bad" value={bad} />
                <Statistics text="all" value={total} />
                <Statistics text="average" value={average > 0 ? average : 0} />
                <Statistics text="positive" value={positiveValue > 0 ? positiveValue : 0} />
            </div>
        </div>
    )
}

export default UnicafeApp