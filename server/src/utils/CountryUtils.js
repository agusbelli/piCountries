const cleanCountries = (arr) =>
    arr.map((c)=>{
        return{
            id:c.cca3,
            name:c.name.common,
            flag:c.flags.png,
            continent:c.continents,
            capital: c.capital? c.capital : ["We have no information"],
            subregion:c.subregion? c.subregion: "We have no information",
            area:c.area,
            pupulation:c.population,
            maps:c.maps.googleMaps,
        }
    });

module.exports = { 
    cleanCountries
};