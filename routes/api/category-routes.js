const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET all categories
// Include associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData); 
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one category by its `id`
// Include associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then((newCategory) => {
      res.status(201).json(newCategory); 
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// PUT update a category by its `id`
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      res.status(200).json(updatedCategory);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// DELETE a category by its `id`
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      if (!deletedCategory) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }
      res.status(200).json({ message: 'Category deleted successfully' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

