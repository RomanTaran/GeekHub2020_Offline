import React from 'react';
import {TextField, Paper, Button, Grid} from '@material-ui/core';

export default class AddTodo extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper style={{margin: 16, padding: 16}}>
        <Grid container>
          <Grid xs={10} md={11} item style={{paddingRight: 16}}>
            <TextField
              placeholder="Add your Todo here"
              value={this.props.inputValue}
              onChange={this.props.onInputChange}
              onKeyPress={this.props.onInputKeyPress}
              fullWidth
            />
          </Grid>
          <Grid xs={2} md={1} item>
            <Button
              fullWidth
              color="secondary"
              variant="outlined"
              onClick={this.props.onButtonClick}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}
