const User = require("../Collection/User");
const Crud = {
    create: async function (req, res) {
        try {
            const { Name, Email, Passw, Gender, Age } = req.body;
            const save_data = new User({
                name: Name,
                email: Email,
                password: Passw,
                gender: Gender,
                age: Age,
            })
            save_data.save()
            res.status(201).json({ m: "User Registered Sucessfully" })
        } catch (error) {
            res.status(500).json({ m: error.message })
        }
    },
    read: async function (req, res) {
        try {
            const users = await User.find()
            res.json(users);
        } catch (error) {
            res.status(500).json({ m: error.message })

        }
    },
    update: async function (req, res) {
        try {


        } catch (error) {
            res.status(201).json({ m: error.message })

        }
    },
   delete: async function (req, res) {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.json({ m: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ m: error.message });
  }
}

}

module.exports = Crud