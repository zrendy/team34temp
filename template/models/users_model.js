const client = require('../connectDatabase.js')

const getUsers = async (email) => {
    
    try {
        const result = await client.query(`SELECT * FROM users_test WHERE email=$1`, [email])
        console.log('THIS IS THE RESULT' , email, result)
        return result.rows
    }catch (err){
        console.log('An error occured:', err)
        const result = {rows:[]};
        return result.rows
    }
}

const postUser = async (post) => {
    
    try {
        const result = await client.query(`INSERT INTO users_test (email, bio, image_url) VALUES ($1, $2, $3) RETURNING *`, [post.email, post.bio, post.image_url])
        console.log('THIS IS THE RESULT' , post, result)
        return result.rows
    }catch (err){
        console.log('An error occured:', err)
        const result = {rows:[]};
        return result.rows
    }
}

module.exports = {getUsers, postUser}