import React, { Component } from 'react';

class NoteDetail extends Component {
  constructor() {
    super();
  }

  render() {
    const { noteID } = this.props.match.params;
    return (
      <div className="NoteDetail">
        <h4>Note I</h4>
      </div>
    );
  }
}

export default NoteDetail;
