import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Segment, Icon } from 'semantic-ui-react';

import './App.css';
import { getAllNote, addNewNote, saveLayout, deleteNote } from './util/localStorage';

import InputField from './components/TextArea/TextArea.Component';
import ButtonGroup from './components/ButtonGroup/ButtonGroup.Component';

import Grid from './components/GridLayout/index';

import styled from 'styled-components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputMode: false,
      notes: {
      },
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
    try {
      addNewNote({
        noteTitle, noteContent,
      });
    } catch (e) {
      console.log(e.message);
    }
    this.initialiseData();
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
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">Simple Grid Widget Notes</h1>
          <Icon className="App-logo" name="table" size="big" />
        </header>
        <BodyWrapper>
        <p className="App-intro">
          To get started, Press <code>Add A New Note</code> and type something.
        </p>
        <ButtonGroup
          inputMode={inputMode}
          onToggleInputMode={this.toggleInputMode}
          onSubmit={this.onSubmit}
          onReset={this.onReset}
        />
          <ContentWrapper>
        {
              inputMode
          && (
          <Segment.Group horizontal>
            <Segment>
              <InputField id="noteTitle" title="Title" />
            </Segment>
            <Segment>
              <InputField id="noteContent" title="Note Content" />
            </Segment>
          </Segment.Group>
          )
            }
          </ContentWrapper>
        <Grid
        notes={notes}
        gridLayout={gridLayout}
        onLayoutChange={this.onLayoutChange}
        onClickDelete={this.onClickDelete}
        />
        </BodyWrapper>
        </div>
    );
  }
}

export default App;

const ContentWrapper = styled.div`
width: 800px;
`

const BodyWrapper = styled.div`
align-content: center;
align-items: center;
display: flex;
flex-direction: column;
`