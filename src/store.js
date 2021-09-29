import { v4 as uuidv4 } from 'uuid';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const TODOS_LS = "toDos";

// local storage 저장 함수
export const saveToDos = (toDos) => {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// local storage 가져오기
let defaultLocalStorage = [];
const savedToDos = localStorage.getItem(TODOS_LS);
if (savedToDos !== null) {
  defaultLocalStorage = JSON.parse(savedToDos);
}

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: defaultLocalStorage,
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: uuidv4() });
    },
    remove: (state, action) => {
      const newState = state.filter(toDo => toDo.id !== action.payload);
      saveToDos(newState);
      return newState;
    }
  }
})

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;