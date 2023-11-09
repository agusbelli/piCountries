const axios = require("axios");
const { loadDb, countriesByName, allCountries, countryById } = require("../controllers/countriesControllers");


const loadCountries = async (req, res) => {
    try {
        const countries = await axios.get("http://localhost:5000/countries")
        const answer = await loadDb(countries.data)
        res.status(200).json(answer);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

const getCountries = async (req, res) => {
    const {name} = req.query;
    try {
        //si tengo name busco, si no traigo todo
        const countries = name ? await countriesByName(name) : await allCountries()
        if(!countries.length){
            res.status(200).json("No matches found");
        }else{
            res.status(200).json(countries);
        }
        
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

const getCountriesId = async (req, res) => {
    const {id} = req.params
    try {
        const country = await countryById(id);
        res.status(200).json(country);   
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};


module.exports = {
    loadCountries,
    getCountries,
    getCountriesId
}