import React from 'react';

const Todo = (props) => {
    const { todo, handleToggleCompleted } = props
    return (
        <p
            className={`${todo.completed ? 'todo complete' : 'todo'}`}
            data-todo={todo.id}
            onClick={handleToggleCompleted}>
            {todo.task}
        </p>
    )
}

export default Todo;