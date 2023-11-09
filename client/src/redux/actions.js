import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_DETAILS = "GET_DETAILS";
export const GET_BYNAME = "GET_BYNAME";
export const FILTERS = "FILTERS";

//aca voy a crear mis actiosns
export const getCountries = () => {
    return async function (dispatch){
        const data = await axios.get("https://backpicountries-4pdg.onrender.com/countries");
        const countries = data.data;
        dispatch({ type: GET_COUNTRIES, payload: countries });
    };
};

export const getActivities = () => {
    return async function (dispatch){
        const data = await axios.get("https://backpicountries-4pdg.onrender.com/activities");
        const activities = data.data;
        dispatch({ type: GET_ACTIVITIES, payload: activities });
    };
};

export const getDetails = (id) => {
    return async function (dispatch){
        const data = await axios.get(`https://backpicountries-4pdg.onrender.com/countries/${id}`);
        const country = data.data;
        dispatch({ type: GET_DETAILS, payload: country });
    };
};

export const getByName = (name) => {
    return async function (dispatch){
        const data = await axios.get(`https://backpicountries-4pdg.onrender.com/countries?name=${name}`);
        const countries = data.data;
        dispatch({ type: GET_BYNAME, payload: countries });
    };
};

export const filterAction = (countries, filterContinent, filterActivitie, orders) => {

    let countriesFilter = countries;

    if(filterContinent!=="all"){
        countriesFilter = countriesFilter.filter((c)=> c.continent[0]===filterContinent)
    }

    if (filterActivitie!=="all") {
        countriesFilter = countriesFilter.filter(c => {
            return c.Activities.some(activity => activity.name === filterActivitie);
        });
    }

    if(orders.orderBy==="az"){
        if(orders.orderAD==="ascendent"){
            countriesFilter = countriesFilter.sort((a, b) => a.name.localeCompare(b.name));
        }else{
            countriesFilter = countriesFilter.sort((a, b) => b.name.localeCompare(a.name));
        }
    }

    if(orders.orderBy==="population"){
        if(orders.orderAD==="ascendent"){
            countriesFilter = countriesFilter.sort((a, b) => a.population - b.population);
        }else{
            countriesFilter = countriesFilter.sort((a, b) => b.population - a.population);
        }
    }

    

    return async function (dispatch){        
        dispatch({ type: FILTERS, payload: countriesFilter });
    };
};