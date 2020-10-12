const db = require('../data/db-config.js')

//resolves to an array of projects

module.exports = {
    resourceFind,
    ResourcePosts,
    resourceFindById,
    resourceAdd,
    resourceUpdate,
    resourceRemove
}

function resourceFind() {
    return db('resource')
}

function resourceFindById(id) { // Find resource post by ID
    return db('resource').where({id}).first();
}

function ResourcePosts(id) {
    return db("resource").where("resource_id", id);
}

function resourceAdd(resourceData) {
    return db('resource')
    .insert(resourceData, "id")
    .then(ids => {
        const id = ids[0]
        return resourceFindById(id)
    })
}
function resourceUpdate (changes, id) {
    return db("resource").where({id}).update(changes)
}

function resourceRemove(id){
    return db("resource").where({id}).del()
}