const dataFile = require("../data/dataModify");

module.exports = {
    get: async (req, res) => {
        res.status(200).send({success: true});
    },
    login: async(req, res) => {
        const {username, password} = req.body;
        const isAuthenticated = await dataFile.isUserExists(username).password === password;

        if (isAuthenticated){
            req.session.userId = 1;
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
        const {id} = req.params;
        res.json(await dataFile.getUserById(id));
    },
    getAll: async (req, res) =>{
        res.json(await dataFile.getUsers());
    },
    add: async (req, res) => {
        const {username, password, places} = req.body;
        await dataFile.addUser({username, password, places});
        res.sendStatus(200);
    },
    update: async (req, res) => {
        const {username, password, places} = req.body;
        const {id} = req.params;
        const result = await dataFile.updateUser(id, {username, password, places});
        res.json({result});
    },
    delete: async (req, res) => {
        const {id} = req.params;
        const result = await dataFile.deleteUser(id);
        res.json({result});
    }
}