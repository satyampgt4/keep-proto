import { useState } from 'react';
import './App.css';
import Header from "./Components/Header";
import CreateArea from "./Components/CreateArea";
import Note from "./Components/Note";
function App() {
  const[notes, setNotes] = useState([]);
  const addNote = (newNotes) =>{
    setNotes((oldValue) =>
    {
      return [...oldValue, newNotes];
      
    });
  }
  const deleteNote = (id) =>{
    setNotes((oldValue) =>{
      return [...oldValue.filter((note,index) =>
      index !== id)];
      
    });
  }
  return(
    <>
    <Header/>
    <CreateArea onAdd = {addNote}/>
    {notes.map((note, index) =>
    {return(
      <Note 
        key = {index}
        id = {index}
        title = {note.title}
        content = {note.content}
        onDelete ={deleteNote}/>) ;
    })}
    </>
  );
}

export default App;
