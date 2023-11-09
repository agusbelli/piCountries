import { useState } from "react";
import Card from "../card/card";
import style from "./cardsContainer.module.css"
import { useSelector } from "react-redux"
import Paginado from "../paginado/paginado";


const CardsContainer = (pops) => {

let allCountries = useSelector((state)=>state.countriesFilter)
const auxiliar = useSelector((state)=>state.auxiliar)

//const [aux, setAux] = useState(auxiliar)

  if(allCountries==="No matches found"){
    allCountries = []
  }


      //logica del paginado?
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
    const countries = allCountries.slice(indexOfFirstCountry,indexOfLastCountry)

    
    const paginado = (pageNumber) => {
      setCurrentPage(pageNumber)
    }

  if (!allCountries.length) {
    return(
      <div className={style.divContainer}>
        <h1 className={style.title}>No matches found</h1>
      </div>
    )
  }
    return ( 
      <div> 
      <div className={style.divContainer}>
        <h1 className={style.title}>DONT WAIT ANY LONGER! Visit the countries you want to explore</h1>
        <div className={style.divCards}> 
              {countries?.map((c)=>{
                return <Card 
                key={c.id}
                name={c.name}
                flag={c.flag}
                continent={c.continent}
                id={c.id}
                maps={c.maps}
                />
              })}
        </div>
        <Paginado countriesPerPage={countriesPerPage} allCountries={allCountries?.length} paginado={paginado}/>
      </div>
      </div>
      );
  };

export default CardsContainer;