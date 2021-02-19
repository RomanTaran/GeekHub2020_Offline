import React, { useState } from "react";
import Layout from "./Layout";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, checkTodo, removeTodo, selectTodos } from "../redux/features/todoSlice";

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const keyInput = (e, callback) => {
    if (e.which === 13 || e.keyCode === 13) {
      callback(inputValue);
      return true;
    }
    return false;
  }
  const handleInputValue=(e)=>{
    setInputValue(e.target.value);
  }
  const clearInputAndAddTodo = () => {
    dispatch(addTodo(inputValue));
    clearInput();
  };
  const clearInput = () => {
    setInputValue('')
  };
  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={handleInputValue}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={idx => dispatch(checkTodo(idx))}
        onItemRemove={idx => dispatch(removeTodo(idx))}
      />
    </Layout>
  )
}