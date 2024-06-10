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
    return data.find(user => user.username == username && user.password == password)? true : false;
}
const returnIdByNameAndPass = async (username, password) => {
    return data.find(user => user.username == username && user.password == password).id;
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
const addPlace = async (name, coordinates, text, imgUrl, userId) => {
    console.log(userId);
    console.log(data[userId]);
    data[userId].places = [...data[userId].places, {name: name, coordinates: coordinates, text: text, imgUrl: imgUrl}];
    await writeInfoToData(data);
    console.log("place added");
    return true;
}

const returnListOfPlaces = async () =>{
    return data.map(user => user.places);
}

module.exports = {
    getUsers, getUserById, addUser, deleteUser, isUserExists, returnIdByNameAndPass, addPlace, returnListOfPlaces
}