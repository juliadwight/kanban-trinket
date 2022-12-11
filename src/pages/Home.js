import classes from './Home.module.scss'
import { Link } from 'react-router-dom'

function Home() {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault()
  })

  return (
    <>
      <h3 className={classes.Title}>Instructions:</h3>
      <ul className={classes.List}>
        <li>Enter tasks in the input field to prepend to the first section</li>
        <li>Left click to append a task to the previous section</li>
        <li>Right click to prepend task to the next section</li>
      </ul>
      <button><Link className={classes.Link} to="board">Go to board</Link></button>
    </>
  );
}

export default Home;
