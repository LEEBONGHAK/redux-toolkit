import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add, saveToDos } from '../store';
import ToDo from '../components/ToDo';

const Home = ({ toDos, addToDo, saveToDos }) => {
  const [text, setText] = useState("");
  saveToDos(toDos);

  const onChange = event => {
    setText(event.target.value);
  }

  const onSubmit = event => {
    event.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        Local Storage: {JSON.stringify(toDos)}
        {toDos.map(toDo => (<ToDo {...toDo} key={toDo.id} />))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: text => dispatch(add(text)),
    saveToDos: toDos => saveToDos(toDos)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);