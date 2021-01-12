import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
//import { useInputValue, useTodos } from './hooks';
import Layout from './components/Layout';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class TodoApp extends React.PureComponent {
  state = {
    inputValue: '',
    todos: [],
  }

  render() {
    const addTodo = text => {
      if (text !== '') {
        const newItem = this.state.todos;
        newItem.push({text, checked: false});
        this.setState({todos: newItem});
      }
    };
    const keyInput = (e, callback)=>{
      if (e.which === 13 || e.keyCode === 13) {
        callback(this.state.inputValue);
        return true;
      }
      return false;
    }
    const clearInputAndAddTodo = () => {
      addTodo(this.state.inputValue);
      clearInput();
    };
    const clearInput = () => {
      this.setState({inputValue: ''})
    };
    const checkTodo = index => {
      const newItem = this.state.todos.map((item, ind) => {
        if (ind === index) {
          return {...item, checked: (!item.checked)};
        } else {
          return {...item};
        }
      })
      this.setState({todos: newItem});
    };
    const removeTodo = index => {
      this.setState({
        todos: this.state.todos.filter((_, i) => i !== index)
      });
    }
    return (
      <Layout>
        <AddTodo
          inputValue={this.state.inputValue}
          onInputChange={(e) => this.setState({inputValue: e.target.value})}
          onButtonClick={clearInputAndAddTodo}
          onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
        />
        <TodoList
          items={this.state.todos}
          onItemCheck={idx => checkTodo(idx)}
          onItemRemove={idx => removeTodo(idx)}
        />
      </Layout>
    )
  }
}

ReactDOM.render(<TodoApp/>, document.getElementById('root'));