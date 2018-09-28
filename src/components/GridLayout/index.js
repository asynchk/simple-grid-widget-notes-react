import React from 'react';
import GridLayout from 'react-grid-layout';

import { PropTypes } from 'prop-types';
import NoteWidget from '../NoteWidgets/NoteWidget';

class Grid extends React.Component {
  render() {
    const {
      notes, gridLayout, onLayoutChange, onClickDelete
    } = this.props;
    console.log('notes', { notes, gridLayout });
    // layout is an array of objects, see the demo for more complete usage
    return (
      <div style={{
        display: 'block',
        width: 1200,
      }}>
      <GridLayout
        className="layout"
        layout={gridLayout}
        cols={6}
        rowHeight={80}
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
                    id={key}
                    title={noteTitle}
                    value={noteContent}
                    onClickDelete={onClickDelete}
                  />
                </div>
              );
            })
      }
      </GridLayout>
      </div>
    );
  }
}

Grid.propTypes = {
  notes: PropTypes.object,
  gridLayout: PropTypes.array,
  onLayoutChange: PropTypes.func,
  onClickDelete: PropTypes.func,
};

Grid.defaultProps = {
  notes: {},
  gridLayout: [],
};

export default Grid;
