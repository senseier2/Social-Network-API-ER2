const router = require('express').Router();


//Get all Users
const {
getUsers,
getSingleUser,
createNewUser,
updateUser,
deleteUser,
addFriend,
deleteFriend,

} = require('../../controllers/userController');


// /api/users
router.route('/')
    .get(getUsers)
    .post(createNewUser)

// /api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

// /:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router;

