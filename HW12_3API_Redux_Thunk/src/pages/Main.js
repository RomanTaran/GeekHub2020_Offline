import { Button, ButtonGroup } from "@material-ui/core";
import { Link } from "react-router-dom"

function Main() {
  return (<div>
    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
      <Link to="/Api1"><Button variant="contained" color="primary">GET 1 API</Button></Link>
      <Link to="/Api2"><Button variant="contained" color="primary">GET 2 API</Button></Link>
      <Link to="/Api3"><Button variant="contained" color="primary">GET 3 API</Button></Link>
    </ButtonGroup>
  </div>)
}

export default Main;