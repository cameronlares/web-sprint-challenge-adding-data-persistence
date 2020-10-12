const express = require('express')
const helmet = require('helmet')

const ProjectRouter = require('./router/project-router');
const ResourceRouter = require('./router/resource-router')
const server = express()
server.use(express.json())

server.use('/api/projects', ProjectRouter)
server.use('/api/resource', ResourceRouter)


module.exports = server; 