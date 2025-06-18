import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const userService = {
	getAllUsers: async () => {
		try {
			const response = await axios.get(`${API_URL}/users`);
			return response.data;
		} catch (error) {
			console.error('Error fetching users:', error);
			throw error;
		}
	},

	login: async credentials => {
        try {
            const response = await axios.post(`${API_URL}/users/login`, credentials);
            return response.data;
        } catch (error) {
            console.error('Error logging in:', error.response?.data || error.message);
            throw error;
        }
    },

	loginGoogle: async ({ idToken, type }) => {
		try {
			const response = await axios.post(`${API_URL}/users/login-google`, { idToken, type });
			return response.data;
		} catch (error) {
			console.error('Error logging in with Google:', error.response?.data || error.message);
			throw error;
		}
	},

	createUser: async userData => {
		try {
			const response = await axios.post(`${API_URL}/users/create-user`, userData);
			return response.data;
		} catch (error) {
		console.error('Error creating user:', error);
			throw error;
		}
	},

	updateUser: async userData => {
		try {
			const response = await axios.put(`${API_URL}/users/update-user`, userData);
			return response.data;
		} catch (error) {
			console.error('Error updating user:', error);
			throw error;
		}
	},
};
