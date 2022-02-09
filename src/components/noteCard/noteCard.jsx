import React, { Component } from 'react';
import "./style.css";
import {ReactComponent as DeleteSvg} from "../../assets/img/delete.svg";

class NoteCard extends Component {

  delete(){
    this.props.deleteNote(this.props.index)
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.title}</h3>
          <DeleteSvg onClick={this.delete.bind(this)}
                     title="Delete"
                     alt="Delete"/>
          <h4>{this.props.category}</h4>
        </header>
        <p className="card-nota_texto">{this.props.body}</p>
      </section>
    );
  }
}

export default NoteCard;