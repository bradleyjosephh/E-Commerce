const router = require('express').Router()
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', async (req, res) => {
  const categoryData = await Category.findAll({ include: [Product] })
  res.json(categoryData)
})

router.get('/categories/:id', async (req, res) => {
  const categoryData = await Category.findOne({ where: { id: req.params.id }, include: [Product] })
  res.json(categoryData)
})

router.post('/categories', async (req, res) => {
  const categoryData = await Category.create(req.body)
  res.json(categoryData)
})

router.put('/categories/:id', (req, res) => {
  // update a category by its `id` value
})

router.delete('/categories/:id', async (req, res) => {
  await Category.destroy({ where: { id: req.params.id } })
  res.sendStatus(200)
})

module.exports = router
