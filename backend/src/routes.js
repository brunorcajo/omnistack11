const express = require("express");
const routes = express.Router();

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
/**
	Ongs
 */
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

/**
	Incidents
 */
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

/**
	Profile
 */
routes.get("/profile", ProfileController.index);

/**
	Sessions
 */
routes.post("/sessions", SessionController.create);

module.exports = routes;
