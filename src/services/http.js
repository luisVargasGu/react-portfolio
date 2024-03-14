import axios from "axios";

function attachAuthorizationHeader(request) {
    const token = getCookie('jwt_token');
    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`;
    }
    return request;
}

export const getCookie = (name) => {
    const cookies = Object.fromEntries(
        document.cookie.split("; ").map((c) => c.split("="))
    );
    return cookies[name];
}

export const getWithAuth = async (url, config = {}) => {
    try {
        const response = await axios.get(url, attachAuthorizationHeader(config));
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const postWithAuth = async (url, data, config = {}) => {
    try {
        const response = await axios.post(url, data, attachAuthorizationHeader(config));
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const putWithAuth = async (url, data, config = {}) => {
    try {
        const response = await axios.put(url, data, attachAuthorizationHeader(config));
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const deleteWithAuth = async (url, config = {}) => {
    try {
        const response = await axios.delete(url, attachAuthorizationHeader(config));
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
