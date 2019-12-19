import React, {useState, useEffect } from 'react'
import Note from './Components/Note'
import axios from 'axios'

export const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only Javascript',
        date: '2019-05-30T18:39:34.091Z',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true
    }
]


const AppTwo = ({ notes }) => {

    const rows = () => testnotes.map(note =>
        <Note
            key={note.id}
            note={note}
        />    
    )

    const [testnotes, setNotes] = useState(notes)
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    const handleClick = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date(),
            important: Math.random() > 0.5 
        }

        axios.post('http://localhost:3001/notes', noteObject)
             .then(response => {
                 console.log(response)
                 setNotes(testnotes.concat(response.data))
                 setNewNote('')
             })
    }

    const handleChange = (e) => {
        setNewNote(e.target.value)
    }

    useEffect(() => {
        console.log('effect')
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                console.log('promise fulfilled')
                setNotes(response.data)
            })
    }, [])

    console.log('render', testnotes.length, 'notes')
    return(
        <div>
            <h1>Notes</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange}
                    value={newNote}
                />
                <input
                    type='submit'
                    value='Submit'
                />
            </form>
            <button onClick={handleClick}>Show/Hide</button>

            <ul>
                {rows()}
            </ul>
        </div>
    )
}

export default AppTwo

