import React from 'react';
import {
  List,
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
export default class TodoListItem extends React.PureComponent{
  constructor(props) {
    super(props);
  }
  render() {
    return(
    <ListItem divider={this.props.divider}>
      <Checkbox
        onClick={this.props.onCheckBoxToggle}
        checked={this.props.checked}
        disableRipple
      />
      <ListItemText primary={this.props.text} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={this.props.onButtonClick}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    )
  }
}
