import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface UserData {
    username: string;
    password: string;
    email?: string;
}

export const register = async (userData: UserData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data;
        } else {
            throw error;
        }
    }
};

interface Credentials {
    username: string;
    password: string;
}

export const login = async (credentials: Credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data;
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
};