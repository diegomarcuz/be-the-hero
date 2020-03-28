const express = require("express");

const { celebrate, Segments, Joi } = require("celebrate");
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileControllerOng = require('./controllers/ProfileControllerOng')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

// post ONG
routes.post('/ong', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(9),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), OngController.store); //celebrate validation needs to be before the store procedure, because Express works with the params order (params actions come from first param, it is runable, then go to the second and so on ) -- it is called middleware



// get ONG
routes.get('/ong', OngController.index);
//delete ONG
routes.delete('/ong/:id', OngController.delete)


// post Incidents
routes.post('/incidents', IncidentController.store)


//get Incidents
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}), IncidentController.index)

//delete Incidents
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), IncidentController.delete)

//specific incidents for each ong
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileControllerOng.index)

//ong login
routes.post('/session', SessionController.store)
module.exports = routes;

