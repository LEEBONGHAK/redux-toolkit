import { v4 as uuidv4 } from 'uuid';
import { createStore } from 'redux';

const TODOS_LS = "toDos";

const ADD = "ADD";
const DELETE = "DELETE";

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

const addToDo = (text) => {
  return {
    type: ADD,
    text
  };
}

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id
  };
}

const reducer = (state = defaultLocalStorage, action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: uuidv4() }, ...state ];
    case DELETE:
      const newState = state.filter(toDo => toDo.id !== action.id);
      saveToDos(newState);
      return newState;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
  saveToDos
};

export default store;