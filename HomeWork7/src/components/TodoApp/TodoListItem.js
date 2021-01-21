import React, { memo } from 'react';
import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText, } from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

const TodoListItem = memo(({divider, onCheckBoxToggle, checked, text, onButtonClick} = props) => (
  <ListItem divider={divider}>
    <Checkbox
      onClick={onCheckBoxToggle}
      checked={checked}
      disableRipple
    />
    <ListItemText primary={text}/>
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete Todo" onClick={onButtonClick}>
        <DeleteOutlined/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
));
export default TodoListItem;