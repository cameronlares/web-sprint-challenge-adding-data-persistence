const db = require('../data/db-config.js')

//resolves to an array of projects

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('projects')
}

function findById(id) {
    return db('projects').where({id}).first();
}

function add(projectData) {
    return db('projects')
    .insert(projectData, "id")
    .then(ids => {
        const id = ids[0]
        return findById(id)
    })
}
function update (changes, id) {
    return db("projects").where({id}).update(changes)
}

function remove(id){
    return db("projects").where({id}).del()
}