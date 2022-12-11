import classes from './Header.module.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={classes.Header}>
      <h1 className={classes.Title}><Link className={classes.Link} to="/">Kanban</Link></h1>
    </div>
  );
}

export default Header
