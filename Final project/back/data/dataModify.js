const fs = require("fs").promises;
const path = require("path");

let data = require ("./data.json");

const writeInfoToData = async data => {
    const jsonData = JSON.stringify(data, null, 2);
    await fs.writeFile(path.join(__dirname, "./data.json"), jsonData);
}

const getUsers = async () =>{
    return data;
}

const getUserById = async id =>{
    return data.find(product =>  +product.id === +id);
}
const isUserExists = async (username, password) =>{
    console.log("from dataModify: ", username, password);
    console.log(data.find(user => user.username == username && user.password == password)? true : false);
    return data.find(user => user.username == username && user.password == password)? true : false;
}
const returnIdByNameAndPass = async (username, password) => {
    return data.find(user => user.username == username && user.password == password).id;
}
const addUser = async user => {
    console.log("From dataModify:", user);
    data.push({id: data.length, ...user});
    await writeInfoToData(data);
}
const deleteUser = async id => {
    data = data.filter(product => +product.id !== +id);
    await writeInfoToData(data);
    return true;
}
const addPlace = async (name, coordinates, text, imgSrc, userId) => {
    data[userId].places = [...data[userId].places, {name: name, coordinates: coordinates, text: text, imgUrl: imgSrc}];
    await writeInfoToData(data);
    return true;
}

module.exports = {
    getUsers, getUserById, addUser, deleteUser, isUserExists, returnIdByNameAndPass, addPlace
}