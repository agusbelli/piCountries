import { useDispatch, useSelector } from "react-redux";
import { filterAction } from "../../../redux/actions";
import style from "./filters.module.css"

const Filters = () => {
    
    //obtengo actividades y continentes
    const activities = useSelector((state)=>state.activities)
    const countries = useSelector((state)=>state.countries)
    
    if(countries==="No matches found"){
        return(<></>)
    }

    let continents = []
    countries?.map((c)=>{
        continents = [...continents, ...c.continent]
    })
    continents = [...new Set(continents)];
    
    //logica del dispatch
    const dispatch = useDispatch();


    //variable a los filtros y order
    let filterContinent = "all";
    let filterActivities = "all";
    let orders = {
        orderBy: "az",
        orderAD: "ascendent"
    }
    
    //funcion del select
    const changeHandler = (event)=>{
        const property = event.target.name
        const value = event.target.value;

        switch (property) {
            case "continents":
                filterContinent = value;
                break;
            case "activities":
                filterActivities = value;
                break;
            case "orderBy":
                orders.orderBy = value;
                break;
            case "orderAD":
                orders.orderAD = value;
                break
        }

        dispatch(filterAction(countries, filterContinent, filterActivities, orders))
    };


    return(
        <>
        <select className={style.selects} name="continents" onChange={changeHandler}>
            <option value="all">All Continents</option>
            {continents?.map((c, index)=>
            <option value={c} key={index}>{c}</option>)}
        </select>
        <select className={style.selects} name="activities" onChange={changeHandler}>
            <option value="all">All Activities</option>
            {activities?.map((a)=>
            <option value={a.name} key={a.id}>{a.name}</option>)}
        </select>

        <select className={style.selects} name="orderBy" onChange={changeHandler}>
            <option value="az">A-Z</option>
            <option value="population">Population</option>
        </select>
        <select className={style.selects} name="orderAD" onChange={changeHandler}>
            <option value="ascendent">Ascendent</option>
            <option value="descendent">Descendent</option>
        </select>
        </>
    )
};

export default Filters;