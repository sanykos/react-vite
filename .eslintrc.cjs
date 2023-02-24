module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    // 'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  ignorePatterns: ['vite.config.ts'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'no-console': 'error',
    // 'prefer-const': 'error',
    // quotes: ['error', 'single'],
    // 'max-len': ['error', { code: 100 }],
    // 'comma-dangle': ['error', 'always-multilinbe'],
    // semi: ['warn', 'always'],
    'import/order': [
      'error',
      {
        // groups: [
        //   'builtin',
        //   'external',
        //   'internal',
        //   'parent',
        //   'sibling',
        //   'index',
        //   'object',
        //   'type',
        // ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
  },
};
