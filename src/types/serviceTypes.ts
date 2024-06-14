import { User } from './moduleTypes'

export interface ApiResponse<T> {
	data: T
	error?: string
}

export interface AuthService {
	login: (username: string, password: string) => Promise<ApiResponse<User>>
	logout: () => void
}
