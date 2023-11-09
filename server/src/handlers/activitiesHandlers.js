const { createActivity, getActivitiesDb } = require("../controllers/activitiesControllers");


const postActivity = async (req, res) => {
    try {
        const {name, difficulty, duration, season, countries} = req.body;
        console.log(name, difficulty, duration, season, countries);
        if(!countries.length) throw Error
        const newActivity = await createActivity(name, difficulty, duration, season, countries)
        res.status(200).json(newActivity);    
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

const getActivities = async (req, res) => {
    try {
        const results = await getActivitiesDb()
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {
    postActivity,
    getActivities,
}