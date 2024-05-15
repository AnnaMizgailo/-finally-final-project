const express = require("express");
const controllers = require("../controllers");

const router = express.Router();

const isAuth = async (req, res, next) => {
    if(!req.session.userId){
        return res.status(401).json({ isAuthenticated: false });
    }
    next();
};

router.get("/", controllers.get);
router.post("/login", controllers.login);
router.get("/auth", controllers.auth);
router.get("/logout", isAuth, controllers.logout);
router.get("/check", isAuth, controllers.check);

router.get("/product/by-id/:id", controllers.getById);
router.get("/product/get-all", controllers.getAll);
router.post("/product/add", controllers.add);
router.put("/product/:id", controllers.update);
router.delete("/product/:id", controllers.delete);

module.exports = router;