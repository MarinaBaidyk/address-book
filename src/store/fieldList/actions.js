import * as actionTypes from "./actionTypes";

export const fieldCreate = value => ({
  type: actionTypes.FIELD_CREATE,
  payload: value,
});

export const fieldDelete = value => ({
  type: actionTypes.FIELD_DELETE,
  payload: value,
});

export const fieldUpdate = (value, id) => ({
  type: actionTypes.FIELD_UPDATE,
  payload: {value, id},
});