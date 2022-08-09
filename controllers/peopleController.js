let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ sucess: true, data: people });
};

const createPerson = (req, res) => {
   const {name} = req.body;
   
    // if (!name) {
    //     return res.status(404).json({success: false, msg: 'please provide some credentials'})
    // }

    // people.push({id: people.length + 1, name: name});
    res.status(201).json({success: true, data: people});
}

module.exports = {getPeople, createPerson}
