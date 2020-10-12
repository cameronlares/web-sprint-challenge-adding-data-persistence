const db = require('../data/db-config.js')

//resolves to an array of projects

module.exports = {
    taskFind,
    taskPosts,
    taskFindById,
    taskAdd,
    taskUpdate,
    taskRemove
}

function taskFind() {
    return db('task')
}

function taskFindById(id) { // Find resource post by ID
    return db('task').where({id}).first();
}

function taskPosts(id) {
    return db("task").where("task_id", id);
}

function taskAdd(taskData) {
    return db('task')
    .insert(taskData, "id")
    .then(ids => {
        const id = ids[0]
        return taskFindById(id)
    })
}
function taskUpdate (changes, id) {
    return db("task").where({id}).update(changes)
}

function taskRemove(id){
    return db("task").where({id}).del()
}