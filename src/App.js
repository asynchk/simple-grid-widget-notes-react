import React, { Component } from 'react';

import { getAllNote, addNewNote, saveLayout, deleteNote } from './util/localStorage';
import Home from './components/Pages/Home';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputMode: false,
      notes: {},
      gridLayout: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  initialiseData = () => {
    const { allNotes, gridLayout } = getAllNote();
    console.log('initialiseData', { allNotes, gridLayout });
    this.setState({
      notes: allNotes,
      gridLayout,
    });
  }

  onReset = () => {
    console.log('onReset');
    const noteTitle = document.querySelector('#noteTitle');
    const noteContent = document.querySelector('#noteContent');
    noteTitle.value = '';
    noteContent.value = '';
  }

  onSubmit = () => {
    const noteTitle = document.querySelector('#noteTitle').value;
    const noteContent = document.querySelector('#noteContent').value;
    // console.log({ noteTitle, noteContent });
    if (noteTitle || noteContent ) {
    try {
      addNewNote({
        noteTitle, noteContent,
      });
    } catch (e) {
      console.log(e.message);
    }
    this.initialiseData();
  }
  }

  toggleInputMode = () => {
    this.setState(prevState => ({
      inputMode: !prevState.inputMode,
    }));
  }

  onLayoutChange = (layout) => {
    console.log('onLayoutChange', layout);
    saveLayout(layout);
  }
  onClickDelete = (id) => {
    deleteNote(id)
    this.initialiseData();
  }

  componentDidMount() {
    this.initialiseData();
  }

  render() {
    const {
      notesContent, notes, gridLayout, inputMode,
    } = this.state;
    return (
      <Home
      inputMode={inputMode}
      toggleInputMode={this.toggleInputMode}
      notes={notes}
      gridLayout={gridLayout}
      onSubmit={this.onSubmit}
      onReset={this.onSubmit}
      onLayoutChange={this.onLayoutChange}
      onClickDelete={this.onClickDelete}
      />
    );
  }
}

export default App;

