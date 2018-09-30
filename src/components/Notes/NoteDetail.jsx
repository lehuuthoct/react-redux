import React, { Component } from 'react';
import { NoteList } from './data';

class NoteDetail extends Component {
  constructor() {
    super();
    this.state = {
      notes: NoteList
    };
  }

  findNote = noteID => {
    return this.state.notes.find((note, index) => {
      return note.id === Number(noteID);
    });
  };

  render() {
    const { noteID } = this.props.match.params;
    // selected note
    const note = this.findNote(noteID);
    console.log('noteID', noteID, NoteList);
    console.log('note', note);
    const noteHTML = note ? (
      <div>
        <p>Title: {note.title} </p>
        <p>{note.content}</p>
      </div>
    ) : (
      'No Note found'
    );

    return (
      <div className="NoteDetail">
        <h4>Note Details</h4>
        {noteHTML}
      </div>
    );
  }
}

export default NoteDetail;
