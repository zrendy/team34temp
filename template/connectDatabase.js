require('dotenv').config()
const {Client} = require('pg')

const user = {
    //use the connection string for RDS
    //connectionString: `postgres://user:password@host:5432/database`,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    database: process.env.PGNAME,
    host: process.env.PGHOST
}
const client = new Client(user)

//connect to client
client.connect((err)=> {
    if(err){
        console.log('Error connecting to database:', err.stack)
    }else{
        console.log(`Successfully connected to db: 
        logged in as: ${user.user}
        listening on port: ${user.port}
        using database: ${user.database}
        host: ${user.host}`)
    }
})

module.exports = client; 