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

function Api3() {
  const [state, setState] = useState([]);
  const handleClick = () => {
    fetch('https://www.balldontlie.io/api/v1/teams/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setState(data.data);
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
            <TableCell>Abbreviation</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Conference</TableCell>
            <TableCell>Division</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="td" scope="row">
                {item.abbreviation}
              </TableCell>
              <TableCell component="td" scope="row">
                {item.city}
              </TableCell>
              <TableCell component="td" scope="row">
                {item.conference}
              </TableCell>
              <TableCell component="td" scope="row">
                {item.division}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></>)
}

export default Api3;