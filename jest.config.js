module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{js,jsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	preset: 'ts-jest',
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
		'^.+\\.mjs$': 'babel-jest',
		// '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/mocks/fileMock.js'
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@components/(.*)$': '<rootDir>/src/components/$1',
		'^@modules/(.*)$': '<rootDir>/src/modules/$1',
		'^@services/(.*)$': '<rootDir>/src/services/$1',
		'^@store/(.*)$': '<rootDir>/src/store/$1',
		'^@assets/(.*)$': '<rootDir>/src/assets/$1',
		'\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/mocks/fileMock.js',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
}
