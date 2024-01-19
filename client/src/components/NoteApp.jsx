import React, { Component } from 'react'
import NoteForm from './NoteForm'
import NoteList from './NoteList'
import axios from 'axios';

export default class NoteApp extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  } 

  handleAddGlobalNote = (newNote) => {
    axios.post('http://localhost:3500/api/notes', newNote)
    .then( res => {
      this.setState(prevState => ({
        notes: [...prevState.notes, res.data.data],
      }))
      console.log('nota agregada exitosamente', res.data)
    })
    .catch(err => {
      console.log('error al crear la nota', err)
    })
  }

  componentDidMount() {
    //Acutaliza las notas cuando se carga el componente 
    axios.get('http://localhost:3500/api/notes')
    .then(res => {
      console.log('notas antes de validacon', res.data.data)
      const notesData = Array.isArray(res.data.data) ? res.data.data : 'hola'
      console.log('notas despues de validacion', notesData );
      this.setState({ notes: notesData })
    })
    .catch( err => {
      console.log('error al obtener las notas', err)
    })
  }

  render() {
    return (
      <div>
        <h1> Appde Notas: ORIGIN </h1>
        <NoteForm onAddNote={this.handleAddGlobalNote}/>
        <NoteList notes={this.state.notes} /> 
      </div>
    )
  }
}
