const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ]
    })

    res.json(tags);
  } catch (err){
    console.error(err);
    res.status(500).json({error: "failed to retrieve tags"});
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagID = req.params.id;
    const tag = await Tag.findByPk(tagID, {
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ]
    })

    if(!tag){
      return res.status(404).json({error: "Tag not found"});
    }

    res.json(tag);
  } catch (err) {
    console.error(err)
    res.status(500).json({error: "failed to retrieve the tag"});
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try {
    const tagName = req.body.tag_name;
    const tag = await Tag.create({tag_name: tagName});
    res.status(201).json(tag);
  } catch (error) {
    console.error(err)
    res.status(400).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagID = req.params.id;
    const newTagName = req.body.tag_name;
    const [updatedCount] = await Tag.update(
      {tag_name: newTagName},
      {where: {id: tagID}}
    );

    if(updatedCount === 0){
      return res.status(404).json({error: "Tag not found"});
    }

    res.json({Message: "Tag updated successfully"});
  } catch(err) {
    console.error(err);
    res.status(500).json(err)
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const tagID = req.params.id;
    const deletedCount = await Tag.destroy({where: {id: tagID}});

    if(deletedCount === 0){
      return res.status(404).json({error: "tag not found"});
    }

    res.json({message: "tag deleted successfully"});
  } catch (error) {
    console.error(err);
    res.status(500).json(err)
  }
});

module.exports = router;
