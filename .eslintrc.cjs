module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:astro/recommended',
	],
	plugins: ['@typescript-eslint', 'jsx-a11y'],
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	globals: {
		NodeJS: true,
		NodeListOf: true,
	},
	rules: {
		// Puedes agregar aquí reglas personalizadas de ESLint
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			extends: [
				'plugin:astro/recommended',
				'plugin:astro/jsx-a11y-recommended',
			],
			rules: {
				// Reglas específicas para archivos .astro
			},
		},
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'astro/jsx-a11y/label-has-associated-control': 'off',
				// Reglas específicas para TypeScript
			},
		},
	],
}
