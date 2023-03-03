const {getLocations} = require('../models/locations_model')

const getLocationsController = async (req, res) => {
    //get body 
    var location = req.body.location
    const result = await getLocations(location);
    res.send(result)
}

module.exports = {getLocationsController}