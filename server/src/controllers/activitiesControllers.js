const { Country, Activity } = require('../db');


const createActivity = async (name, difficulty, duration, season, countries) => {
    const newActivity = await Activity.create({name, difficulty, duration, season})
    newActivity.addCountry(countries)
    return newActivity;
};

const getActivitiesDb = async () => {
    const activities = await Activity.findAll({
        include:{
            model:Country,
            attributes:['name'],
            through:{
                attributes:[],
            }
        },
    });

    return  activities;
};


module.exports = {
    createActivity,
    getActivitiesDb,
}