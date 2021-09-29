import { v4 as uuidv4 } from 'uuid';
import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const TODOS_LS = "toDos";

// local storage 저장 함수
const saveToDos = (toDos) => {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// local storage 가져오기
let defaultLocalStorage = [];
const savedToDos = localStorage.getItem(TODOS_LS);
if (savedToDos !== null) {
  defaultLocalStorage = JSON.parse(savedToDos);
}

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer(defaultLocalStorage, {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: uuidv4() });
  },
  [deleteToDo]: (state, action) => {
    const newState = state.filter(toDo => toDo.id !== action.payload);
    saveToDos(newState);
    return newState;
  }
});

const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
  saveToDos
};

export default store;