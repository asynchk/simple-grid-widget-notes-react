import React from 'react';
import GridLayout from 'react-grid-layout';

import NoteWidget from '../NoteWidgets/NoteWidget';

class Grid extends React.Component {
  render() {
    const {
      notes, gridLayout, onLayoutChange,
    } = this.props;
    console.log('notes', { notes, gridLayout });
    // layout is an array of objects, see the demo for more complete usage
    return (
      <GridLayout
        className="layout"
        layout={gridLayout}
        cols={12}
        rowHeight={50}
        width={1200}
        onLayoutChange={onLayoutChange}
      >
        {
            typeof notes === 'object' && Object.keys(notes).map((key) => {
              const {
                noteTitle, noteContent,
              } = notes[key];
              return (
                <div key={key}>
                  <NoteWidget
                    title={noteTitle}
                    value={noteContent}
                  />
                </div>
              );
            })
      }
      </GridLayout>
    );
  }
}

export default Grid;
