import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    const { todos, handleToggleCompleted } = props
    return (
        <div className="todos-container">
            {
                todos.map( todo => <Todo key={todo.id} todo={todo} handToggleCompleted={handleToggleCompleted} />)
            }
        </div>
    )
}

export default TodoList;