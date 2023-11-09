import style from './landing.module.css'
import { Link } from "react-router-dom"
import logo from "../../images/logo.png"
import buceo from "../../images/buceo.jpg"
import camping from "../../images/camping.jpg"
import culture from "../../images/culture.jpg"
import trekking from "../../images/trekking.jpg"
import utv from "../../images/utv.jpg"
import museo from "../../images/museo.jpg"


const Landing = () => {
    const iamges = [utv,buceo,trekking,camping,culture,museo]
        return (
          <div className={style.landing}>
            <div className={style.header}>
              <img src={logo} alt="Logo de la empresa" className={style.logo} />
              <div className={style.description}>
                <Link to="/home">
                  <button>Explore the world</button>
                </Link>
                <p>Welcome to our platform for booking tourist travels!</p>
              </div>
            </div> 
            <div className={style.div2}>
              <div className={style.description2}>
                <p>Explore the best destinations and find the perfect travel experience for you</p>
              </div>
              <div className={style.imageContainer}>
                {iamges.map((image, index)=>(
                  <img src={image} key={index} alt="Destination 1" className={style.destination} />
                ))}
              </div>
            </div>
          </div>
      );
    };
    
    export default Landing;
  