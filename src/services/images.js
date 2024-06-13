import axios from "axios";
import { apiUrl } from "./environment";

export const updateUserAvatar = async (email, password) => {
    try {
        const response = await axios.put(`${apiUrl}auth`, { email, password }, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

