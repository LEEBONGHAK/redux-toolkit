# Redux Toolkit
  
Learning Redux Toolkit  
Edit [react-redux toDo page using](https://github.com/LEEBONGHAK/react-redux) Redux Toolkit  
Lecture : [초보자를 위한 리덕스 101](https://nomadcoders.co/redux-for-beginners) by nomadcoder  
  
Redux Toolkit
 - 많은 양의 코드(Boilerplate Code)를 써야하는 Redux를 위해 Redux 커뮤니티가 제안한 것
 - 간단히 말하면, 많은 지름길들이 있는 Package 즉, 적은 양의 Redux 코드를 짤 수 있도록 도와 주는 것

### createAction()

`const addToDo = createAction("ADD");`을 사용해서 아래와 같은 코드를 줄일 수 있다.  
  
```
const ADD = "ADD";

const addToDo = (text) => {
  return {
    type: ADD,
    text
  };
}
```
  
action.type은 createAction("action.type name")에 의해 결정되며, payload의 경우 dispatch로부터 온 값을 사용한다.  
  