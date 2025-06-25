import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getUsers() {
    try {
        const res = await axios.get(`${apiUrl}/users`);
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function getUser(id) {
    try {
        const res = await axios.get(`${apiUrl}/users/${id}`);
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function addUser(user) {
    try {
        const res = await axios.post(`${apiUrl}/users`, user);
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function editUser(id, user) {
    try {
        const res = await axios.put(`${apiUrl}/users/${id}`, user);
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function deleteUser(id) {
    try {
        const res = await axios.delete(`${apiUrl}/users/${id}`);
        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

