import React, { Component } from "react";
import NoteForm from "./components/noteForm";
import NoteLists from "./components/noteLists";
import CategoryLists from "./components/CategoryLists";
import "./assets/App.css";
import './assets/index.css';
import Categories from "./data/Categories";
import Notes from "./data/Notes";

class App extends Component {

  constructor(){
    super();
    this.categories = new Categories();
    this.notes = new Notes();
  }


  render() {
    return (
      <section className="conteudo">
        <NoteForm categories={this.categories.categories}
                  createNote={this.notes.addNote}/>
        <main className="conteudo-principal">
          <CategoryLists categories={this.categories.categories}
                         addCategory={this.categories.addCategory} />
          <NoteLists
          deleteNote={this.notes.deleteNote}
          notes={this.notes.notes} />
        </main>

      </section>
    );
  }
}

export default App;
