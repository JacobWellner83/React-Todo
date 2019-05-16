import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
     task: '',
     todos: [
       {
         task: 'construct Todo list',
         id: Date.now(),
         completed: false,
       }
     ]
    };
  }
  
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm
          task={this.state.task}
          addTodoHandler={this.addTodoHandler}
          removeTodoHandler={this.removeTodoHandler}
          handleChange={this.handleChange}
        />
        <TodoList
          todos={this.state.todos}
          handleToggleCompleted={this.handleToggleCompleted}
        />
    );
  }
}

export default App;
