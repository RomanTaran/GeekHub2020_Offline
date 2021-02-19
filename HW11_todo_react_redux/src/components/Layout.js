import React from 'react';
import { AppBar, Paper, Toolbar, Typography } from '@material-ui/core';

export default class Layout extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Paper
        elevation={0}
        style={{padding: 0, margin: 0, backgroundColor: '#afafaf'}}
      >
        <AppBar color="primary" position="static" style={{height: 64}}>
          <Toolbar style={{height: 64}}>
            <Typography color='inherit'>YOUR TODO LIST</Typography>
          </Toolbar>
        </AppBar>
        {this.props.children}
      </Paper>
    )
  }
}