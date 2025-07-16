const User = require("../Collection/User"); 
const Crud = {
    create : async function(req,res){
        try {
            const {Name,Email,Passw, Gender , Age} = req.body;
            const save_data = new User({
                name: Name,
                email: Email,
                password: Passw,
                gender:Gender,
                age:Age,
            })
            save_data.save()
            res.status(201).json({m : "User Registered Sucessfully"})
        } catch (error) {
            res.status(201).json({m : error.message})
        }
    }
}

module.exports = Crud