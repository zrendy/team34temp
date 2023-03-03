//ROUTE USERS
const router = require('express').Router()
//import controllers
const {getUsersController, postUserController} = require('../controllers/users')
const {getUserEventsController} = require('../controllers/userEvents')

router.route('/')
.get(getUsersController)
.post(postUserController)

router.route('/userevent')
.get(getUserEventsController)


router.route('/page2').get((req, res)=> {
    console.log(req.url)
})

module.exports = router