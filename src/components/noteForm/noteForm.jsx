import React, { Component } from "react";
import "./style.css"

class NoteForm extends Component {

  constructor(props){
    super(props);
    this.title = "";
    this.body = "";
    this.category = "Sem Categoria";
  }

  _handleChangeCategory(event){
    event.stopPropagation()
    this.category = event.target.value
  }

  _handleChangeTitle(event){
    event.stopPropagation();
    this.title = event.target.value;
  }

  _handleChangeBody(event) {
    event.stopPropagation();
    this.body = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(`Uma nova nota foi criada ` + this.title + " " + this.body);
    this.props.createNote(this.title, this.body, this.category);
  }

  render() {
    return (
      <form className="form-cadastro "
        onSubmit={this._createNote.bind(this)}
      >
        <select onChange={this._handleChangeCategory.bind(this)} className="form-cadastro_input" >
          <option defaultChecked>Sem Categoria</option>
          {this.props.categories.map(category => {
            return <option>{category}</option>
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleChangeTitle.bind(this)}/>
        <textarea
          placeholder="Escreva sua nota..."
          rows={15}
          className="form-cadastro_input"
          onChange={this._handleChangeBody.bind(this)}/>
        <button className="form-cadastro_input form-cadastro_submit"
                title="Create Note">Criar nota</button>
      </form>
    );
  }
}

export default NoteForm
