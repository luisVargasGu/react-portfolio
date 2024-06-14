import axios from 'axios'
import { apiUrl } from './environment'

export const login = async (email, password) => {
	try {
		const response = await axios.post(
			`${apiUrl}auth`,
			{ email, password },
			{
				withCredentials: true,
			}
		)
		return response.data
	} catch (error) {
		console.error(error)
	}
}

export const register = async (email, password) => {
	try {
		const response = await axios.post(
			`${apiUrl}register`,
			{ email, password },
			{
				withCredentials: true,
			}
		)
		return response.data
	} catch (error) {
		console.error(error)
	}
}
