import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import CreateArea from "./Components/CreateArea";
import Note from "./Components/Note";
import Footer from "./Components/Footer";
function App() {
  const [notes, setNotes] = useState([]);

  window.onload = function () {
    var temp = JSON.parse(window.localStorage.getItem("noteslocal"));
    if (temp != null) {
      setNotes(() => {
        return temp;
      });
    }
  };

  const addNote = (newNotes) => {
    setNotes((oldValue) => {
      var newValue = [...oldValue, newNotes];
      window.localStorage.setItem("noteslocal", JSON.stringify(newValue));
      return newValue;
    });
  };
  const deleteNote = (id) => {
    setNotes((oldValue) => {
      var newValue = [...oldValue.filter((note, index) => index !== id)];
      window.localStorage.setItem("noteslocal", JSON.stringify(newValue));
      return newValue;
    });
  };
  return (
    <>
      <Header />
      <div className="Notearea">
        <CreateArea onAdd={addNote} />
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
