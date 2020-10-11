const express = require('express')

const Projects = require('./project-model')

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


module.exports = router;