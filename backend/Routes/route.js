const p = require("../Controller/Crud");
const exp = require("express")
const router = exp.Router();

router.post("/save",p.create)
router.get("/users",p.read)
router.delete("/users/:id",p.delete)

module.exports = router