const users = require("./schema/userschema.js");

const adduser = (req, res) => {
  const { username, email, password } = req.body;
  const newuser = new users({
    username,
    email,
    password,
  });
  newuser.save();
  res.status(200).json({ message: "succussfully" });
};

const deleteuser = async (req, res) => {
  const id = req.params.id;
   await users.findByIdAndDelete(id);

  return res.status(200).json({ message: "delete succussfully" });
};

const viewuser =async (req,res)=>{
    const user =await users.find();
    return res.status(200).json({data:user})
}
module.exports = { adduser, deleteuser,viewuser };
