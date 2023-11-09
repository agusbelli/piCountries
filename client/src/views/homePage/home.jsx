import style from "./home.module.css"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountries, getActivities } from "../../redux/actions";
import CardsContainer from "../../components/cardsContainer/cardsContainer";
import Modifiers from "../../components/modifiers/modifiers";

const Home = () => {
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCountries())
    dispatch(getActivities())
  },[dispatch])


  return (
        <div className={style.background}>
          <div className={style.container}>
          <Modifiers />
          </div>
          <CardsContainer />

        </div>
    );
  };

export default Home;