import { v4 as uuidv4 } from 'uuid';
import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

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

// const reducer = (state = defaultLocalStorage, action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: uuidv4() }, ...state ];
//     case deleteToDo.type:
//       const newState = state.filter(toDo => toDo.id !== action.payload);
//       saveToDos(newState);
//       return newState;
//     default:
//       return state;
//   }
// };

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

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
  saveToDos
};

export default store;