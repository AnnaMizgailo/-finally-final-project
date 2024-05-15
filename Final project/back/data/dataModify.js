const fs = require("fs").promises;
const path = require("path");

let data = require("./data.json");

const writeInfoToData = async data => {
    const jsonData = JSON.stringify(data, null, 2);
    await fs.writeFile(path.join(_dirname, "./data.json"), jsonData);
}

const getUsers = async () =>{
    return data;
}

const getUserById = async id =>{
    return data.find(product =>  +product.id === +id);
}
const isUserExists = async username =>{
    return data.find(user => user.username == username);
}

const addUser = async user => {
    data.push({id: data.length, ...user});
    await writeInfoToData(data);
}
const deleteUser = async id => {
    data = data.filter(product => +product.id !== +id);
    await writeInfoToData(data);
    return true;
}

module.exports = {
    getUsers, getUserById, addUser, deleteUser, isUserExists
}