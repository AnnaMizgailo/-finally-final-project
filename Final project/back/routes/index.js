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
router.get("/logout", controllers.logout);
router.get("/check", isAuth, controllers.check);
router.post("/add", controllers.add);

router.get("/place/by-id/:id", controllers.getById);
router.get("/place/get-all", controllers.placesGet);
router.post("/place/add", controllers.placeAdd);
router.put("/place/:id", controllers.update);
router.delete("/place/:id", controllers.delete);

module.exports = router;