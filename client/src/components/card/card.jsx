import style from "./card.module.css"
import { useNavigate } from 'react-router-dom';

const Card = (c) => {
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${c.id}`);
  };

  return (
        <div className={style.divCard} onClick={handleClick}>
            <h3 className={style.name}>{c.name}</h3>
            <img className={style.image} src={c.flag}/>
            {c.continent?.map((cont, index)=>
                <p key={index}>{cont}</p>
              )}
        </div>
    );
  };

export default Card;