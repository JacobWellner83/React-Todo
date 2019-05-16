import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    const { todos, handleToggleCompleted } = props
    return (
        <div className="todos-container">
            {
                todos.map
            }
        </div>
    )
}

export default TodoList;