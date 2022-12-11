import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import classes from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={classes.App}>
      <div className={classes.Container}>
        <Header />
        <div className={classes.View}> 
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout