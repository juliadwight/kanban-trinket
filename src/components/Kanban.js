import React, { useState } from 'react'
import classes from './Kanban.module.scss'

function Kanban(stages){

  const [nextId, setNextId] = useState(0)
  const [output,setOutput]= useState([])
  const [userInput, setUserInput] = useState('')
  const [right, setRight] = useState(0)
  let permittedValues=[]
  let stage = 0
  if (stages.stages.length === 0){
    return (null)
  }

  const handleSubmit = (event) => {
    if(event.key === 'Enter'){
      event.preventDefault()
      handleChange()
      setUserInput('')
    }
  }

  const handleChange = () => {
        setOutput([
        ...output,
          {id: nextId, stages: 0, task: userInput}
      ]) 
    setNextId(nextId + 1)
  }

  // If Right Click prepend element to beginning but if Left Click append element to end
  const handleClick = (event) => {
    if (event.type === "click"){
      let newArr = [...output]
      let index = newArr.findIndex((obj=>obj.id == event.target.value))
      newArr[index].stages = newArr[index].stages + 1
      newArr.push(newArr.splice(index,1)[0])
      setOutput (newArr)
    } else if (event.type === "contextmenu"){
      let newArr = [...output]
      let index = newArr.findIndex((obj=>obj.id == event.target.value))
      setRight(1)
      newArr[index].stages = newArr[index].stages - 1
      newArr.unshift(newArr.splice(index,1)[0])
      setOutput (newArr)
    }
  }

  // Renders the divs and updates when task is added to the input
  const renderList = () => {
    if (output === undefined || output.length === 0) {return ''}
    if (output) {
      if (stage<stages.stages.length){
        permittedValues = output.filter(x => x.stages === stage)
        stage++
        permittedValues.reverse()
      }
      else {
        stage = 0
      }
      return permittedValues.map(data => {
        return (
          <button key={data.id} value={data.id} onClick={(event) => handleClick(event)} onContextMenu={(event) => handleClick(event)}>{data.task}</button>
        )
      })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.Form}>
        <label>Add a task:</label>
        <input
          type="text"
          onChange={(event) => setUserInput(event.target.value)}
          onKeyPress={handleSubmit}
          value={userInput}
        />
      </form>
      <div className={classes.Container}>
        {stages.stages.map(x => <div className={classes.Stage}><p>{x}</p>{renderList()}</div>)}
      </div>
    </>
  )
}

export default Kanban