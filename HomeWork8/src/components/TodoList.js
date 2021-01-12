import React from 'react';
import {List, Paper, Grid} from '@material-ui/core';
import TodoListItem from './TodoListItem';

export default class TodoList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.items.length > 0 && (
          <Paper style={{margin: 16}}>
            <List style={{overflow: 'scroll'}}>
              {this.props.items.map((todo, idx) => (
                <TodoListItem
                  {...todo}
                  key={`TodoItem.${idx}`}
                  divider={idx !== this.props.items.length - 1}
                  onButtonClick={() => this.props.onItemRemove(idx)}
                  onCheckBoxToggle={() => this.props.onItemCheck(idx)}
                />
              ))}
            </List>
          </Paper>
        )}
      </>
    )
  }
}