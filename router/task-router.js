const express = require('express')

const Task = require('./task-model')
const router = express.Router();



  router.get('/', (req, res) => {
    Task.taskFind()
    .then(task => {
        res.json(task)
    })
    .catch(error => {
        res.status(500).json({message: `Failed to get resource ${error}`})
    })
})

router.get('/:id/', (req, res) => {
    const {id} = req.params; //id destructured. Grab resource by id
    
    Task.taskFindById(id)
    .then(task => {
        if(task) {
            res.json(task)
        } else {
            res.status(404).json({ message: `Could not find resource by id`})
        }
    }) 
    .catch(err => {
        res.status(500).json({message: `Failed to get project`})
    })
    
    })

    router.get("/:id/task", (req, res) => { //Grab post by resource_id
        Task.taskPosts(req.params.id)
            .then(posts => {
                res.status(200).json({ data: posts });
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    });

    
    // 

    router.post('/' , (req, res) => { //Post a new project
        const TaskData = req.body;
        Task.taskAdd(TaskData)
        .then(project => {
            res.status(201).json({message: `Added a new project${project}`})
        })
        .catch(err => {
            res.status(500).json({message: `Failed to create a new project ${err}`})
        })
    })
  
  router.put("/:id", (req, res) => {
      const {id} = req.params;
      const changes = req.body;
  
      Task.taskUpdate(id, changes)
      .then(count => {
          if (count) {
              res.json({ update: count})
          } else {
              res.status(404).json({ message: "Could not Update Task with given ID"})
          }
      })
      .catch(err => {
          res.status(500).json({ message: "Failed to update Task"})
      })
  })
  
  
  router.delete("/:id", (req, res) => {
      const {id} = req.params;
  
      Task.taskRemove(id) 
      .then(count => {
          if (count) {
              res.json({ taskRemove: count})
          }
          else {
              res.status(404).json({ Message:" could not find Task to delete with given id"})
          }
      })
      .catch(err => {
          res.status(500).json({ message: "Failed to delete task"})
      })
  })

    


module.exports = router