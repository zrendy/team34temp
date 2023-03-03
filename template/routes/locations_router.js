const router = require('express').Router()
const {getLocationsController} = require('../controllers/locations')
//this will route with the base route 
router.route('/')
.get(getLocationsController)
.post((req, res)=> {
    console.log('POST REQUEST LOCATIONS', req.url)
    res.end()
})

router.route('/page2').get((req, res)=> {
    console.log(req.url)
})

module.exports = router