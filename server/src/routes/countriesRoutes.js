const { Router } = require("express");
const countriesRoutes = Router();
const { getCountries, getCountriesId, loadCountries } = require("../handlers/countriesHandlers")

//routes
countriesRoutes.get('/load', loadCountries);
countriesRoutes.get('/', getCountries);
countriesRoutes.get('/:id', getCountriesId);


module.exports = countriesRoutes;