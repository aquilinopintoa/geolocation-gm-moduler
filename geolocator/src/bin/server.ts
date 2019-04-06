import 'dotenv/config'

import app from '../app'
import * as http from 'http'

const port = process.env.PORT || 3000

async function start () {
    try {

        app.set('port', port)

        const server = http.createServer(app)

        server.listen(port, () => {
            console.log(`Server listening at port ${port}`)
        })
    } catch (err) {
        console.log('Server error', err.message)
        console.log(err)
        process.exit(1)
    }
}

start()