let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).send({ sucess: true, data: people });
};


module.exports = {getPeople}
