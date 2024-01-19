import React, { Component } from 'react'

export default class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
    }
  }
  
  handleTitleChange = (e) => {
    this.setState({title: e.target.value})
  }

  handleContentChange = (e) => {
    this.setState({content: e.target.value})
  }

  hanldeSubmitNote = e => {
    e.preventDefault();

    // Creando el OBJETO JSON A ENVIAR LA NOTA
    const noteSend = {
      title: this.state.title,
      content: this.state.content,
    }

    //  LLAMAR A LA FUNCION QUE VIENE POR PROPS PARA AGREGAR UNA NUEVA NOTA 
    this.props.onAddNote(noteSend)

    // LIMPIEZA DE FORMULARIO
    this.setState({title: '', content: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.hanldeSubmitNote}>
          <div>
            <label>title: </label>
            <input type="text"  value={this.state.title} placeholder='nota sobre:' onChange={this.handleTitleChange}/>
          </div>
          <div>
            <label> Descripcion: </label>
            <textarea placeholder='que tienes en mente?' value={this.state.content} onChange={this.handleContentChange}/>
          </div>
          <button> agregar nota</button>
        </form>
      </div>
    )
  }
}
