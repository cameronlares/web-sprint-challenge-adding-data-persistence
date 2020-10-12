const express = require('express')

const Resource = require('./resource-model')
const router = express.Router();



  router.get('/', (req, res) => {
    Resource.resourceFind()
    .then(resource => {
        res.json(resource)
    })
    .catch(error => {
        res.status(500).json({message: `Failed to get resource ${error}`})
    })
})

router.get('/:id/', (req, res) => {
    const {id} = req.params; //id destructured. Grab resource by id
    
    Resource.resourceFindById(id)
    .then(resource => {
        if(resource) {
            res.json(resource)
        } else {
            res.status(404).json({ message: `Could not find resource by id`})
        }
    }) 
    .catch(err => {
        res.status(500).json({message: `Failed to get project`})
    })
    
    })

    router.get("/:id/resource", (req, res) => { //Grab post by resource_id
        Resource.ResourcePosts(req.params.id)
            .then(posts => {
                res.status(200).json({ data: posts });
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    });

    
    // 

    router.post('/' , (req, res) => { //Post a new project
        const resourceData = req.body;
        Resource.resourceAdd(resourceData)
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
  
      Resource.resourceUpdate(id, changes)
      .then(count => {
          if (count) {
              res.json({ update: count})
          } else {
              res.status(404).json({ message: "Could not Update project with given ID"})
          }
      })
      .catch(err => {
          res.status(500).json({ message: "Failed to update Project"})
      })
  })
  
  
  router.delete("/:id", (req, res) => {
      const {id} = req.params;
  
      Resource.resourceRemove(id) 
      .then(count => {
          if (count) {
              res.json({ resourceRemove: count})
          }
          else {
              res.status(404).json({ Message:" could not find project to delete with given id"})
          }
      })
      .catch(err => {
          res.status(500).json({ message: "Failed to delete project"})
      })
  })

    


module.exports = router