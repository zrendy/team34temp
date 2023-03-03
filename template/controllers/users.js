const {getUsers, postUser} = require('../models/users_model')

const getUsersController = async (req, res) => {
    //get body 
    
    var email = req.query.email
    console.log('GET USER GOT HERE', email)
    const result = await getUsers(email);
    res.send(result)
}


const postUserController = async (req, res) => {
    //get body 
    var newPost = req.body
    console.log('Post USER GOT HERE', newPost)
    const result = await postUser(newPost);
    console.log('THIS IS WHAT IS SENT BY THE POST', result)
    res.send(result)
}

module.exports = {getUsersController, postUserController}