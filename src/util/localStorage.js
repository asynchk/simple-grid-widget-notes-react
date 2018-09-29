export const addNewNote = ({
  noteTitle, noteContent,
}) => {
  const CurrentNotesString = localStorage.getItem('@grid-widget-notes:notes');
  const lastId = localStorage.getItem('@grid-widget-notes:lastId') || 0;
  const newId = parseInt(lastId) + 1;
  const CurrentNotes = CurrentNotesString ? JSON.parse(CurrentNotesString) : {};
  const newNote = {
    [lastId]: {
      noteTitle,
      noteContent,
    },
  };
  const combinedNewNotes = Object.assign(newNote, CurrentNotes);
  const combinedNewNotesString = JSON.stringify(combinedNewNotes);
  localStorage.setItem('@grid-widget-notes:notes', combinedNewNotesString);
  localStorage.setItem('@grid-widget-notes:lastId', newId);
};

export const saveLayout = (layout) => {
  localStorage.setItem('@grid-widget-notes:gridLayout', JSON.stringify(layout));
};
export const getAllNote = () => {
  const allNotesString = localStorage.getItem('@grid-widget-notes:notes');
  const gridLayoutString = localStorage.getItem('@grid-widget-notes:gridLayout');
  let allNotes = {};
  let gridLayout = [];
  if (allNotesString) {
    allNotes = JSON.parse(allNotesString);
  }
  if (gridLayoutString) {
    gridLayout = JSON.parse(gridLayoutString);
  }
  return {
    allNotes, gridLayout,
  };
};

export const deleteNote = (id) => {
  const { allNotes, gridLayout, } = getAllNote();
  console.log({ allNotes, gridLayout, id} )
  const { [id]:skipped, ...filteredNotes} = allNotes;
  const filterGridLayout = gridLayout.filter(layout => layout.i !== id)
  localStorage.setItem('@grid-widget-notes:notes', JSON.stringify(filteredNotes));
  localStorage.setItem('@grid-widget-notes:gridLayout', JSON.stringify(filterGridLayout));
}