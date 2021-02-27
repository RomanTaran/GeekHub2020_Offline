import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@material-ui/core";

function Api2() {
  const [state, setState] = useState([]);
  const handleClick = () => {
    fetch('https://api.npms.io/v2/search?q=react')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setState(data.results);
      });
  }
  return (<>
    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
      <Link to="/"><Button variant="contained" color="primary">GO HOME</Button></Link>
      <Button variant="contained" color="secondary" onClick={handleClick}>GET DATA</Button>
    </ButtonGroup>
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Scoped</TableCell>
            <TableCell>Version</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((item) => (
            <TableRow key={item.searchScore}>
              <TableCell component="td" scope="row">
                {item.package.name}
              </TableCell>
              <TableCell component="td" scope="row">
                {item.package.scope}
              </TableCell>
              <TableCell component="td" scope="row">
                {item.package.version}
              </TableCell>
              <TableCell component="td" scope="row">
                {item.package.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></>)
}

export default Api2;