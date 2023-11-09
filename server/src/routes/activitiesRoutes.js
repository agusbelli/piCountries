const { Router } = require("express");
const activitiesRoutes = Router();
const { postActivity, getActivities } = require("../handlers/activitiesHandlers")

//routes
activitiesRoutes.post('/', postActivity);
activitiesRoutes.get('/', getActivities);

module.exports = activitiesRoutes;

