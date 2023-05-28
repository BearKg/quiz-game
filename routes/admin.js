const express = require('express')
const router = express.Router()
const {
  getSingleAdmin,
  getAllAdmin,
  createNewAdmin,
  updateAdmin,
  deleteAdmin,
} = require('../controllers/admin')
// route

router.route('/').get(getAllAdmin).post(createNewAdmin)

router.route('/:id').get(getSingleAdmin).patch(updateAdmin).delete(deleteAdmin)

module.exports = router
