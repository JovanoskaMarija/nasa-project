const planets = require("../../models/planets.model");

function getAllPlanets(req, res) {
  const results = res.status(200).json(planets);
  return results;
}

module.exports = {
  getAllPlanets,
};
