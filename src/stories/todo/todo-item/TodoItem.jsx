import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';

export const TodoItem = ({ userId, id, title, completed }) => {
  return (
  <div className='todo-item'>
    <div>userId: {userId}</div>
    <div>title: {title}</div>
    <div>completed: {completed ? 'O' : 'X'}</div>
  </div>
  );
}

TodoItem.propTypes = {
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  completed: PropTypes.bool,
}
