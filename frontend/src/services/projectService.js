import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const projectService = {
    getAllProjects: async () => {
        try {
            const response = await axios.get(`${API_URL}/projects`);
            return response.data;
        } catch (error) {
            console.error('Error fetching projects:', error);
            throw error;
        }
    },

    createProject: async (projectData) => {
        try {
            const response = await axios.post(`${API_URL}/projects/create-project`, projectData);
            return response.data;
        } catch (error) {
            console.error('Error creating project:', error);
            throw error;
        }
    },

    updateProject: async (projectData) => {
        try {
            const response = await axios.put(`${API_URL}/projects/update-project`, projectData);
            return response.data;
        } catch (error) {
            console.error('Error updating project:', error);
            throw error;
        }
    },
};
