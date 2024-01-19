import React, { Component } from 'react'

export default class NoteList extends Component {
  render() {
    const allnotas = Array.isArray(this.props.notes) ? this.props.notes : []
    console.log('contenido de notas', allnotas)
    
    return (
      <div>
        <h2> Lista de Notas </h2>
        <ul>
          {
            allnotas.map((itemNote, index) => (
              <li key={index}>
                <strong> {itemNote.title} </strong> {itemNote.content}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
