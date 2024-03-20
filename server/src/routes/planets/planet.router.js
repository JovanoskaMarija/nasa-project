const express = require("express");
const { getAllPlanets } = require("./planets.contollers");
const planetsRouter = express.Router();
planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
