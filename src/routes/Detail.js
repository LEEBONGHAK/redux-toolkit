import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

const Detail = ({ toDo, onBtnClick }) => {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>toDo id : {toDo?.id}</h5>
      <Link to={"/"}>
        <button onClick={onBtnClick}>Delete</button>
      </Link>
      
    </>
  ) 
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: {id}
    }
  } = ownProps;
  return {toDo: state.find(toDo => toDo.id === id)};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: {id}
    }
  } = ownProps;
  return {
    onBtnClick: () => (dispatch(actionCreators.deleteToDo(id)))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);