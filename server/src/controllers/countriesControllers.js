const { Country, Activity } = require('../db');
const { cleanCountries } = require('../utils/CountryUtils');


const loadDb = async (arr) => {
    const countries = cleanCountries(arr)
    let creates = [];
    for (let i = 0; i < countries.length; i++) {

        const id = countries[i].id;
        const name = countries[i].name;
        const flag = countries[i].flag;
        const continent = countries[i].continent;
        const capital = countries[i].capital;
        const subregion = countries[i].subregion;
        const area = countries[i].area;
        const population = countries[i].pupulation;
        const maps = countries[i].maps;

        const newCountry = await Country.create({id,name,flag,continent,capital,subregion,area,population,maps})
        creates.push(newCountry)
    }
    if (creates.length) {
        return "Database loaded successfully"
    }else{ "Database error loaded" }
};

const allCountries = async () => {
    
    const countries = await Country.findAll({
        include:{
            model:Activity,
            attributes:['name'],
            through:{
                attributes:[],
            }
        },
    });

    return  countries;
};

const countriesByName = async (name) => {

    let nameTlc = name.toLowerCase()

    let countriesDb = await Country.findAll({
        include:{
            model:Activity,
            attributes:['name'],
            through:{
                attributes:[],
            }
        },
    });

    countriesDb = !!name? countriesDb.filter(country => country.name.toLowerCase().includes(nameTlc)) : [];
    
    return countriesDb;
};

const countryById = async (id) => {
    let country = await Country.findByPk(id,{
        include:{
            model:Activity,
            attributes:['name'],
            through:{
                attributes:[],
            }
        },
    })

    return country;
};

module.exports = { 
    loadDb,
    allCountries,
    countriesByName,
    countryById,
};