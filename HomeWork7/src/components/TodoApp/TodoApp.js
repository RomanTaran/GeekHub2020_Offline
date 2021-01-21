import React, { memo } from 'react';
import hooks from "../../hooks/hooks";
import Layout from './Layout';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const TodoApp = memo(() => {
  const {inputValue, changeInput, clearInput, keyInput} = hooks.useInputValue();
  const {todos, addTodo, checkTodo, removeTodo} = hooks.useTodos();
  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };
  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
    </Layout>
  );
});
export default TodoApp;