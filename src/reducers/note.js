export default (state, action) => {
  switch (action.type) {
    case "fetch":
      return action.notes;
    case "add":
      return [
        ...state,
        { title: action.title, noteContent: action.noteContent },
      ];
    case "remove":
      return state.filter((note) => note.title != action.title);

    default:
      return state;
  }
};
