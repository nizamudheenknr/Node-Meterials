const express = require ("express");
const { adduser, deleteuser, viewuser } = require("../user.js");
const router = express.Router();


router.post('/register',adduser);
router.delete('/delete/:id',deleteuser)
router.get('/viewdata',viewuser)

module.exports = router;

