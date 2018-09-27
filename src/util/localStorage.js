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

export const _getItem = async function ({ key, callback }) {
  console.log('_getItem: initialise get item :', key);
  try {
    const value = await AsyncStorage.getItem(`@grid-widget-notes:${key}`);
    if (value !== null && !(value instanceof Promise)) {
      // convert string to boolean values
      const output = value === 'true' ? true : value === 'false' ? false : value;
      // We have data!!
      console.log('_getItem: asyncStorage key and values: ', key, output);
      return output;
    }
    console.log('_getItem: value is null for key:', key);
    return null;
  } catch (error) {
    // Error retrieving data
    console.warn('_getItem: error :', error);
    return null;
  }
};

export const _setItem = async function ({ key, value, callback }) {
  try {
    const output = typeof value === 'boolean' ? value.toString() : value;
    await AsyncStorage.setItem(`@grid-widget-notes:${key}`, output, callback);
  } catch (error) {
    // Error saving data
    console.warn('_setItem: error :', error);
  }
};
export const _removeItem = async ({ key, callback }) => {
  try {
    await AsyncStorage.removeItem(`@grid-widget-notes:${key}`, callback);
  } catch (error) {
    // Error saving data
    console.warn('_removeItem: error :', error);
  }
};
