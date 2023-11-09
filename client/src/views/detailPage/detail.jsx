import style from './detail.module.css';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getDetails } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getDetails(id));
  }, []);

  const country = useSelector(state => state.country);

  return (
    <div className={style.container}>
      <div className={style.container2}>
        <div className={style.container3}>
          <h1 className={style.name}>{country.name}</h1>
          <img className={style.flag} src={country.flag} alt="Country Flag" />
          <br />
          <Link to={country.maps} className={style.a}>Link to Google Maps</Link>
        </div>
      <div>
      <div className={style.container4}>
      <div className={style.data}>
      <h3>Continent:</h3>
        {country.continent?.map((cont, index) => (
          <p key={index}>{cont}</p>
        ))}
      </div>
      <div className={style.data}>
      <h3>Capital:</h3>
      {country.capital?.map((cap, index) => (
        <p key={index}>{cap}</p>
        ))}
      </div>
      <div className={style.data}>
      <h3>Subregion:</h3>
      <p>{country.subregion}</p>
      </div>
      <div className={style.data}>
      <h3>Population: <p>{country.population} people</p></h3>
      <h3>Area: <p>{country.area} m2</p></h3>
      </div>      
      <div className={style.data}>
      <h3>Activities:</h3>
      {country.Activities?.length ? (
        <div className={style.activities}>
          {country.Activities.map((act, index) => (
            <p key={index}>{act.name}</p>
            ))}
        </div>
      ) : (
        <p>There are no activities related to this country</p>
        )}
      </div>
      </div>  
      </div>
      </div>
    </div>
  );
};

export default Detail;
