import axios from 'axios';

export async function get(url, options) {
	const response = await axios.get(import.meta.env.VITE_API_BASE_URL + url, { ...options });
	return response.data;
}

export async function post(url, body, options) {
	const response = await axios.post(import.meta.env.VITE_API_BASE_URL + url, { ...body }, { ...options });
	return response.data;
}

export async function patch(url, body, options) {
	const response = await axios.patch(import.meta.env.VITE_API_BASE_URL + url, { ...body }, { ...options });
	return response.data;
}

export async function del(url, options) {
	const response = await axios.delete(import.meta.env.VITE_API_BASE_URL + url, { ...options });
	return response.data;
}
