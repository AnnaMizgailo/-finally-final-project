import React, {useState, useEffect} from "react";
import axios from "axios";

const AdminControl = () =>{
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState({
        username: "",
        password: "",
        places: []
    });

    useEffect(()=>{
        fetchUsers();
    }, []);

    const fetchUsers = async () =>{
        try{
            const response = await axios.get("http://localhost:3000/user/get-all");
            setProducts(response.data);
        }catch (error) {
            console.error("Error getting all users: ", error);
        }
    }

    const handleAddUser = async () => {
        try{
            const {id, ...newUser} = editUser;
            await axios.post("http://localhost:3000/user/add", newUser);
            fetchUsers();
            setEditUser({
                username: "",
                password: "",
                places: []
            });
        } catch (error) {
            console.error("Error adding user: ", error);
        }
    }

    const handleUpdateProduct = async () => {
        try{
            await axios.put(`http://localhost:3000/user/${editUser.id}`, editUser);
            fetchUsers();
            setEditUser({
                username: "",
                password: "",
                places: []
            });
        } catch (error) {
            console.error("Error updating user", error);
        }
    }
    const handleDeleteUser = async (id) => {
        try{
            axios.delete(`http://localhost:3000/user/${id}`);
            fetchUsers();
        }catch (error) {
            console.error("Error deleting user", error);
        }
    }
}

export default AdminControl;