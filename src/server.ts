import express from 'express'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended: true}))

server.listen(process.env.PORT, () => {
    console.log('Server running on ', process.env.BASE)
})