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

function Api1() {
  const [state, setState] = useState([]);
  const handleClick = () => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setState(data.results);
      });
  }

  const data = Object.entries(state);
  return (<>
    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
      <Link to="/"><Button variant="contained" color="primary">GO HOME</Button></Link>
      <Button variant="contained" color="secondary" onClick={handleClick}>GET DATA</Button>
    </ButtonGroup>
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Key</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item[0]}>
              <TableCell component="td" scope="row">
                {item[0]}
              </TableCell>
              <TableCell component="td" scope="row">
                {item[1].name.first + ' ' + item[1].name.last}
              </TableCell>
              <TableCell component="td" scope="row">
                {item[1].cell}
              </TableCell>
              <TableCell component="td" scope="row">
                {item[1].email}
              </TableCell>
              <TableCell component="td" scope="row">
                {item[1].gender}
              </TableCell>
              <TableCell component="td" scope="row">
                {item[1].phone}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></>)
}

export default Api1;