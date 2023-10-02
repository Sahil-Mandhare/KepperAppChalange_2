import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((noteIteam) => (
        <Note
          key={noteIteam.key}
          title={noteIteam.title}
          content={noteIteam.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
