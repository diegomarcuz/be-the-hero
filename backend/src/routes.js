const express = require("express");
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileControllerOng = require('./controllers/ProfileControllerOng')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

// post ONG
routes.post('/ong', OngController.store);



// get ONG
routes.get('/ong', OngController.index);
//delete ONG
routes.delete('/ong/:id', OngController.delete)


// post Incidents
routes.post('/incidents', IncidentController.store)


//get Incidents
routes.get('/incidents', IncidentController.index)

//delete Incidents
routes.delete('/incidents/:id', IncidentController.delete)

//specific incidents for each ong
routes.get('/profile', ProfileControllerOng.index)

//ong login
routes.post('/session', SessionController.store)
module.exports = routes;

