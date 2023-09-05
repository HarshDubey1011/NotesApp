import React,{useState,useEffect} from 'react';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search'
import Header from './components/Header';
const App = (props) => {
  const [notes,setNotes]=useState([
  {
    id:nanoid(),
    text:'This is my note',
    date:'1/04/21'
  },
  {
    id:nanoid(),
    text:'This is my note 2',
    date:'11/04/21'
  },
  {
    id:nanoid(),
    text:'This is my note 3',
    date:'22/04/21'
  },
  ])

  const [searchText,searchTextAdd] = useState('')
  const [darkMode,setDarkMode] = useState(false)

  useEffect(()=>{
      const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
      if(savedNotes){
        setNotes(savedNotes)
      }

  },[])

  useEffect(()=>{
      localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  },[notes])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote]
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id!==id)
    setNotes(newNotes)
  }
 
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleMode={setDarkMode} />
        <Search handleSearchNote={searchTextAdd} />
        <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
    
  
  )
}

export default App;