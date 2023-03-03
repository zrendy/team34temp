const client = require('../connectDatabase.js')

const getUserEvents = async (username) => {
    
    try {
        const result = await client.query(`SELECT * FROM usereventtable`)
        return result.rows
    }catch (err){
        console.log('An error occured:', err)
        const result = {rows:[]};
        return result.rows
    }
}

module.exports = {getUserEvents}