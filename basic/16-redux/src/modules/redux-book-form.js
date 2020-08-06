/* initial state */
const initialState = {
    form: {
      id: 0,
      title: '',
      content: '',
      writer: '',
      date: '',
    },
  };
  /* actions */
  const CHANGE_FORM = 'books/CHANGE_FORM';
  
  /* action creators */
  export const changeForm = ({ id, title, content, writer, date }) => ({
    type: CHANGE_FORM,
    form: {
      id,
      title,
      content,
      writer,
      date,
    },
  });
  
  
  /* reducer */
  function bookFormReducer(state = initialState, action) {
    switch (action.type) {
      case CHANGE_FORM:
        return {
          ...state,
          form: action.form,
        };
      default:
        return state;
    }
  }
  
  export default bookFormReducer;
  