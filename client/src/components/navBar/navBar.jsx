import { Link } from "react-router-dom"
import style from "./navBar.module.css"
import icono from "../../images/icono2.png"

const NavBar = ()=>{
   
    return(
        <nav className={style.navbar}>
            <Link to="/home"><img src={icono} className={style.icono}/></Link>
            <Link className={style.button} to="/form">POST ACTIVITY</Link>
            <Link className={style.button} to="/home">DESTINATIONS</Link>
            <Link className={style.button} to="/">EXIT</Link>
        </nav>
    )
}

export default NavBar;