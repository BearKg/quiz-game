const Admin = require('../models/Admin')
const asyncWrapper = require('../middleware/async')
const createCustomError = require('../errors/custom-error')

const getAllAdmin = asyncWrapper(async (req, res, next) => {
  const admin = await Admin.find()
  res.status(201).json({ admin })
})

const createNewAdmin = asyncWrapper(async (req, res, next) => {
  const admin = await Admin.create(req.body)
  res.status(201).json({ admin })
})

const getSingleAdmin = asyncWrapper(async (req, res, next) => {
  const { id: adminID } = req.params
  const admin = await Admin.findOne({ _id: adminID })
  if (!admin)
    return next(createCustomError(`Cant find admin with id: ${adminID}`, 404))
  res.status(201).json({ admin })
})

const updateAdmin = asyncWrapper(async (req, res, next) => {
  const { id: adminID } = req.params
  const admin = await Admin.findOneAndUpdate({ _id: adminID }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!admin)
    return next(createCustomError(`Cant find admin with id: ${adminID}`, 404))
  res.status(201).json({ admin })
})

const deleteAdmin = asyncWrapper(async (req, res, next) => {
  const { id: adminID } = req.params
  const admin = await Admin.findOneAndRemove({ _id: adminID })
  if (!admin)
    return next(createCustomError(`Cant find admin with id: ${adminID}`, 404))
  res.status(201).json({ admin })
})

module.exports = {
  getSingleAdmin,
  getAllAdmin,
  createNewAdmin,
  updateAdmin,
  deleteAdmin,
}
