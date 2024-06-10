const dataFile = require("../data/dataModify");

module.exports = {
    get: async (req, res) => {
        res.status(200).send({success: true});
    },
    login: async(req, res) => {
        const {username, password} = req.body;
        const isAuthenticated = await dataFile.isUserExists(username, password);
        if (isAuthenticated){
            req.session.userId = await dataFile.returnIdByNameAndPass(username, password);
            console.log( "from server", req.session.userId);
            res.status(200).send({success: true});
        }else{
            res.status(401).send({success: false});
        }
    },
    logout: async (req, res) => {
        req.session.destroy();
        res.status(200).send({ success: true });
    },
    check: async (req, res) =>{
        res.json({text: 13}) // ???
    },
    auth: async (req, res) => {
        res.send("Auth");
    },
    getById: async (req, res) =>{
        res.json(await dataFile.getUserById(req.session.userId));
    },
    getAll: async (req, res) =>{
        res.json(await dataFile.getUsers());
    },
    add: async (req, res) => {
        const {username, password} = req.body;
        await dataFile.addUser({username, password});
        res.status(200).send({success: true});
    },
    update: async (req, res) => {
        const {username, password, places} = req.body;
        const result = await dataFile.updateUser(req.session.userId, {username, password, places});
        res.json({result});
    },
    delete: async (req, res) => {
        const result = await dataFile.deleteUser(req.session.userId);
        res.json({result});
    },
    placeAdd: async (req, res) =>{
        const {name, coordinates, text, imgUrl} = req.body;
        const result = await dataFile.addPlace(name, coordinates, text, imgUrl, req.session.userId);
        if (result){
            res.status(200).send({success: true});
        }else{
            res.status(400).send({success: false});
        }
       
    },
    placesGet: async (req, res) =>{
        const result = await dataFile.returnListOfPlaces();
        res.json(result);
    }
}