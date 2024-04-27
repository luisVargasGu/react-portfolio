import axios from "axios";
import { apiUrl } from "./environment";
import { computed, signal } from "@preact/signals-react";

export const user = signal(null);

export const isLoggedIn = computed(() => !!user.value);

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${apiUrl}auth`, { email, password }, {
            withCredentials: true  // Add withCredentials flag
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const register = async (email, password) => {
    try {
        const response = await axios.post(`${apiUrl}register`, { email, password }, {
            withCredentials: true  // Add withCredentials flag
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
