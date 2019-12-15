import React, { useState } from 'react'
import { Button } from '../../App'

const TopAnecdote = ({ votes, anecdotes }) => {

    let topScore = 0
    let winner = 0

    Object.keys(votes).forEach(key => {
        if (votes[key] > topScore) {
            winner = key
            topScore = votes[key]
        }
    })

    return(
        <div>
            <h1>Anecdote with most votes</h1>
            <div>{anecdotes.anecdote[winner].text}</div>
            <div>has {topScore} votes</div>
        </div>
    )
}



const Anecdote = ({ anecdotes }) => {

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(
        { 
            0: 0,
            1: 0, 
            2: 0,
            3: 0,
            4: 0,
            5: 0
        }
    )

    const randNum = Math.floor(Math.random() * (anecdotes.anecdote.length - 1))
    console.log(randNum)
    const updateAnecdote = () => setSelected(randNum)
    
    const updateVotes = (value) => () => {
        const copy = { ...votes }
        copy[value] += 1
        // Create copy of vote array and then increase the chosen vote by 1
        setVotes(copy)
    }

    return(
        <div>
            <p>{anecdotes.anecdote[selected].text}</p>
            <p>Votes: {votes[selected]}</p>
            <div>
                <Button
                    onClick={updateVotes(selected)}
                    text="Vote"
                />
                <Button
                    onClick={updateAnecdote}
                    text="Randomize"
                />

                <TopAnecdote votes={votes} anecdotes={anecdotes} />
            </div>
        </div>
    )
}

export default Anecdote

