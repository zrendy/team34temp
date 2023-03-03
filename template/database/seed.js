const fs = require('fs').promises
const client = require('../connectDatabase')

const seed = async () => {
    console.log(__dirname)
    const users = await (await fs.readFile(__dirname+'/user.sql')).toString()
    const locations = await (await fs.readFile(__dirname+'/location.sql')).toString()
    const events = await (await fs.readFile(__dirname+'/event.sql')).toString()
    const userEvents = await (await fs.readFile(__dirname+'/userEvent.sql')).toString()
    const query = users+locations+events+userEvents
    const result = await client.query(query, [])
    console.log(result)
}

seed()