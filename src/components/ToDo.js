import React from 'react';
import {connect} from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

const ToDo = ({ text, id, onBtnClick }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>Delete</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => (dispatch(actionCreators.deleteToDo(ownProps.id)))
  };
}

// null => if you don't use mapStateToProps in connect
export default connect(null, mapDispatchToProps)(ToDo);