# Redux Toolkit  
  
Learning Redux Toolkit  
Edit [react-redux toDo page using](https://github.com/LEEBONGHAK/react-redux) Redux Toolkit  
Lecture : [초보자를 위한 리덕스 101](https://nomadcoders.co/redux-for-beginners) by nomadcoder  
  
Redux Toolkit
 - 많은 양의 코드(Boilerplate Code)를 써야하는 Redux를 위해 Redux 커뮤니티가 제안한 것
 - 간단히 말하면, 많은 지름길들이 있는 Package 즉, 적은 양의 Redux 코드를 짤 수 있도록 도와 주는 것
  
## createAction(action.type)  
  
```
const ADD = "ADD";

const addToDo = (text) => {
  return {
    type: ADD,
    text
  };
}
```
  
위와 같은 일반적인 action을 `const addToDo = createAction("ADD");`와 같은 방법을 사용해서 코드를 줄일 수 있다.  
`action.type`은 `createAction("action.type name")`에 의해 결정되며, `payload`의 경우 `dispatch`로부터 온 값을 사용한다.  
  
## createReducer(default state, {actions})  
  
```
const reducer = (state = defaultLocalStorage, action) => {
  switch (action.type) {
    case "ADD":
      return [{ text: action.payload, id: uuidv4() }, ...state ];
    case "DELETE":
      const newState = state.filter(toDo => toDo.id !== action.id);
      saveToDos(newState);
      return newState;
    default:
      return state;
  }
};
```
  
위와 같은 일반적인 `reducer`를 아래와 같은 코드로 줄일 수 있다.  
```
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
```  
  
위 코드에서 볼 수 있듯이 `createReducer`는 state를 mutate하거나 새로운 state를 만들어 return할 수 있다.  
그러나 동시에 사용하지 못하며, state를 mutate하면 return하지 못하고 반대로 새로운 state를 return하면 state를 mutate하지 못한다.  
  
## configureStore({ reducer })  
  
Chrome 웹 스토어에서 [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko&)를 사용하게 할 수 있다.  
Redux DevTools는 state의 상태 등을 보기 편하게 만들어 준다.  