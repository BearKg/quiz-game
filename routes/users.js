const express = require('express') 
const router = express.Router()
const {
    getSingleUser,
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
} = require('../controllers/users')

//user route
router.route('/').get(getAllUsers).post(createNewUser)
router.route('/:id').get(getSingleUser).patch(updateUser).delete(deleteUser)


module.exports = router