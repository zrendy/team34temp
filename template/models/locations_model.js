const client = require('../connectDatabase.js')

const getLocations = async (location) => {
    
    try {
        if(location){
            const result = await client.query(`SELECT * FROM locations WHERE name=$1`, [location])
            return result.rows
        }else {
            const result = await client.query(`SELECT * FROM locations`)
            return result.rows
        }
    }catch (err){
        console.log('An error occured:', err)
        return [] 
    }
}

module.exports = {getLocations}