import axios from "axios";
import { apiUrl } from "./environment";

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${apiUrl}auth`, { username: email, password }, {
            withCredentials: true  // Add withCredentials flag
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const register = async (email, password) => {
    try {
        const response = await axios.post(`${apiUrl}register`, { username: email, password }, {
            withCredentials: true  // Add withCredentials flag
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
