import React, { Component } from "react";
import NoteCard from "../noteCard";
import "./style.css"

class NoteLists extends Component {


  render() {
    return (
      <ul className="lista-notas">
        {
          this.props.notes.map(
            (note, index) => {
              return (
                <li className="lista-notas_item" key={index}>
                  <NoteCard index={index}
                            deleteNote={this.props.deleteNote}
                            title={note.title}
                            body={note.body}
                            category={note.category}/>
                </li>
              );
            }
          )
        }

      </ul>);
  }

}

export default NoteLists