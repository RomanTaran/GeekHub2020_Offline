import React, { memo } from 'react';
import { List, Paper } from '@material-ui/core';
import TodoListItem from './TodoListItem';

const TodoList = memo(({items, onItemRemove, onItemCheck} = props) => (
  <>
    {items.length > 0 && (
      <Paper style={{margin: 16}}>
        <List style={{overflow: 'scroll'}}>
          {items.map((todo, idx) => (
            <TodoListItem
              {...todo}
              key={`TodoItem.${idx}`}
              divider={idx !== items.length - 1}
              onButtonClick={() => onItemRemove(idx)}
              onCheckBoxToggle={() => onItemCheck(idx)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
));
export default TodoList;