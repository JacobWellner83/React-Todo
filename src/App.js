import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
     
    };
  }
  
  render() {
    return (
      <div>
        <TodoList
        handleTodoComplete={this.changeTodo}

    );
  }
}

export default App;
