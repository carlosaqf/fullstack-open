import React, { useState } from 'react';
import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'

const History = ({ allClicks }) => {
  if (allClicks.length === 0){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

export const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Display = (props) => {
  return(
    <div>
      {props.value}
    </div>
  )
}


const App = (props) => {
  
  const course = {
    name: 'Application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
    ]
  }

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])

  //State for Displaying Value Example
  const [value, setValue] = useState(0)

  const setToValue = (newValue) => () => {
    setValue(newValue)
  }

  const handleLeftClick = () => {
    setLeft(left + 1)
    setAllClicks(allClicks.concat('L'))
  }

  const handleRightClick = () => {
    setRight(right + 1)
    setAllClicks(allClicks.concat('R'))
  }

  const handleReset = () => {
    setLeft(0)
    setRight(0)
    setAllClicks([])
  }

  return(
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

      <br />

      <h1>Click History Example</h1>
      {left}
      <Button 
        onClick={handleLeftClick}
        text="Left"
      />
      {right}
      <Button 
        onClick={handleRightClick}
        text="Right"
      />
      <br />
      <Button 
        onClick={handleReset}
        text="Reset"
      />
      <History allClicks={allClicks} />

      <br/>

      <h1>Display Value Example</h1>
      <div>
        <Display value={value} />
        <Button
          onClick={setToValue(1000)}
          text="thousand"        
        />
        <Button
          onClick={setToValue(0)}
          text="reset"        
        />
        <Button
          onClick={setToValue(value + 1)}
          text="increment"        
        />
      </div>

    </div>
  )
}


export default App

