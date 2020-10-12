const express = require('express')

const Projects = require('./project-model')
const Resource = require('./resource-model')
const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
    .then(project => {
        res.json(project)
    })
    .catch(error=> {
        res.status(500).json({ message: `Failed to get project :${error}`})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Projects.findById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
  });

  router.post('/' , (req, res) => { //Post a new project
      const projectData = req.body;
      Projects.add(projectData)
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

    Projects.update(id, changes)
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

    Projects.remove(id) 
    .then(count => {
        if (count) {
            res.json({ removed: count})
        }
        else {
            res.status(404).json({ Message:" could not find project to delete with given id"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to delete project"})
    })
})


module.exports = router;