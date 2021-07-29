const initialState = {};

export default function formDataReducer(state = initialState, action) {
  switch (action.type) {
    case 'FIELD_CHANGE':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case 'FIELD_CLEAR':
      return {};

    default:
      return state;
  }
}