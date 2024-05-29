const dataFile = require("../data/dataModify");

module.exports = {
    get: async (_, res) => {
        res.json({ok: 13}); //?????
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
    check: async (_, res) =>{
        res.json({text: 13}) // ???
    },


    getById: async (req, res) =>{
        const {id} = req.params;
        res.json(await dataFile.getUserById(id));
    },
    getAll: async (_, res) =>{
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
        res.sendStatus({result});
    },
    delete: async (req, res) => {
        const {id} = req.params;
        const result = await dataFile.deleteUser(id);
        res.json({result});
    }
}