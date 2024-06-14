import axios from 'axios'
import { apiUrl } from './environment'

export const updateUserAvatar = async () => {
	try {
		const response = await axios.put(
			`${apiUrl}image`,
			{},
			{
				withCredentials: true,
			}
		)
		return response.data
	} catch (error) {
		console.error(error)
	}
}
