import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'

import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailboxForm'
import NavBar from './components/NavBar'


import './App.css'

function App() {
  const [mailboxes, setMailboxes] = useState([])
  const [newBox, setNewBox] = useState({
    id: "",
    boxSize: "",
    boxHolder: ""
})

const addBox = (e) => {
  e.preventDefault()
   const currentBoxes = mailboxes
  const createdBox = {
    ...newBox,
    id: parseInt(mailboxes.length + 1)

  }
  currentBoxes.push(createdBox)
  setMailboxes(currentBoxes)
  setNewBox({id: '', boxSize: "", boxHolder: ""})
}

const handleChange = (e) => {
  setNewBox({...newBox, [e.target.boxHolder]: e.target.value})
}
  

  return (
    
    <div className ="App">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path ='/' element = {<main><h1>Post Office</h1></main>}/>
        <Route path ='/mailboxes' element = {<MailboxList mailboxes ={mailboxes}/>}/>
        <Route path ="/mailboxes/:mailboxId" element = {<MailboxDetails mailboxes = {mailboxes} />}/>
        <Route path="/new" element = { <MailboxForm newBox={newBox}
                                                    handleChange = {handleChange}
                                                  addBox = {addBox}/>}/>
      </Routes>

    </div>
    
  )
}

export default App
