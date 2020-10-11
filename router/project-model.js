const db = require('../data/db-config.js')

//resolves to an array of projects

module.exports = {
    find,
    findById,

}

function find() {
    return db('projects')
}

function findById(id) {
    return db('projects').where({id}).first();
}