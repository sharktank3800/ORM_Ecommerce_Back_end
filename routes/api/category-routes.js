const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: Product, //included associated products
    });

    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "failed to retrieve categories" });
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryID = req.params.id;
    const category = await Category.findByPk(categoryID, {
      include: Product,
    });

    if (!category) {
      return res.status(404).json({ error: "category not found" });
    }

    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "failed to retrieve the category" });
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "failed to create the category" });
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryID = req.params.id;
    const [updatedCategory] = await Category.update(req.body, {
      where: { id: categoryID },
    });

    if (updatedCategory === 0) {
      return res.status(404).json({ error: "category not found" });
    }

    res.json({ message: "category updated succesfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "failed to update the category" });
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryID = req.params.id;
    const deletedCategory = await Category.destroy({
      where: { id: categoryID },
    });
    if (deletedCategory === 0) {
      return res.status(404).json({ error: "category not found" });
    }

    res.json({ message: "category deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "failed to delete the category" });
  }
});

module.exports = router;
