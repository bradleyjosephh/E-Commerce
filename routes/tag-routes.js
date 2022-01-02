const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../../models')

// The `/api/tags` endpoint

router.get('/tags', async (req, res) => {
  const tagData = await Tag.findAll({ include: [{model: Product, through: ProductTag}] })
  res.json(tagData)
})

router.get('/tags/:id', async (req, res) => {
  const tagData = await Tag.findOne({ where: { id: req.params.id }, include: [{model: Product, through: ProductTag}] })
  res.json(tagData)
})

router.post('/tags', async (req, res) => {
  const tagData = await Tag.create(req.body)
  res.json(tagData)
})

router.put('/tags/:id', async (req, res) => {
  const tagData = await Tag.update(req.body, {where: { id: req.params.id}})
  res.json(tagData)
})

router.delete('/tags/:id', (req, res) => {
  await Tag.destroy({ where: { id: req.params.id } })
  res.sendStatus(200)
})

module.exports = router
