const router = require('express').Router();
const db = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  db.Category.findAll({
    include: [db.Product]
  }).then(dbCategory => {
    res.json(dbCategory);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  db.Category.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Product]
  }).then(dbCategory => {
    res.json(dbCategory);
  });
});

router.post('/', (req, res) => {
  // create a new category
  db.Category.create(req.body).then(dbCategory => {
    res.json(dbCategory);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  db.Category.update(req.body, {
    where: {
      id: req.params.id
    }
})
    .then(dbCategory);
 })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  db.Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbCategory => {
    res.json(dbCategory);
  });
});

module.exports = router;
