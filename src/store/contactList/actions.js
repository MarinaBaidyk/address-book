import * as actionTypes from "./actionTypes";

// export const todoCreate = (text) => ({
//   type: actionTypes.TODO_CREATE_ITEM,
//   payload: text
// });

// export const todoToggle = (item, done) => ({
//   type: actionTypes.TODO_TOGGLE_ITEM,
//   payload: { item, done } // action.payload.item
//   // item: item, // action.item
//   // done: done, // action.done
// });

export const contactCreate = (title) => ({
  type: actionTypes.CONTACT_CREATE,
  payload: title
});

export const contactDelete = (index) => ({
  type: actionTypes.CONTACT_DELETE,
  payload: index
});

export const contactUpdate = (value, contactIndex ) => ({
  type: actionTypes.CONTACT_UPDATE,
  payload: {value, contactIndex},
});