import React from 'react';

const TodoForm = (props) => {
    const { addTodoHandler, removeTodoHandler, handleChange } = props
    return (
        <form
            name= "todo-blank"
            onSubmit={addTodoHandler}
        >
            <input
                type="text"
                name="task"
                value={props.task}
                placeholder="What Next"
                onChange={handleChange}
            />
            <button onClick={addTodoHandler}>
                Add Todo
            </button>
            <button onClick={removeTodoHandler}>
                Clear Completed
            </button>
        </form>
    )
}

export default TodoForm;