import { GET_COUNTRIES, GET_ACTIVITIES, GET_DETAILS, FILTERS, GET_BYNAME } from "./actions";


const initialState = {
    countries: [],
    activities:[],
    countriesFilter:[],
    country: {},
    auxiliar: true
  }

const rootReducer = (state=initialState, action )=>{
    switch(action.type){
        case GET_COUNTRIES:
            return { ...state, countries: action.payload , countriesFilter: action.payload };
        case GET_ACTIVITIES:
            return { ...state, activities: action.payload };
        case GET_DETAILS:
            return { ...state, country: action.payload };
        case GET_BYNAME:
            return { ...state, countries: action.payload, countriesFilter: action.payload };
        case FILTERS:
            return {...state, countriesFilter: action.payload, auxiliar: !state.auxiliar}
        default:
            return {...state};
        }
};

export default rootReducer;