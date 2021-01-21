import React, { memo } from 'react';
import { Button, Grid, Paper, TextField } from '@material-ui/core';

const AddTodo = memo(({inputValue, onInputChange, onInputKeyPress, onButtonClick} = props) => (
  <Paper style={{margin: 16, padding: 16}}>
    <Grid container>
      <Grid xs={10} md={11} item style={{paddingRight: 16}}>
        <TextField
          placeholder="Add your Todo here"
          value={inputValue}
          onChange={onInputChange}
          onKeyPress={onInputKeyPress}
          fullWidth
        />
      </Grid>
      <Grid xs={2} md={1} item>
        <Button
          fullWidth
          color="secondary"
          variant="outlined"
          onClick={onButtonClick}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  </Paper>
));
export default AddTodo;