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
  // ignorePatterns: ['vite.config.ts'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 'off',
    'no-console': 'error',
    'no-param-reassign': 0,
    'jsx-a11y/no-static-element-interactions': [
      'warn',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
        allowExpressionValues: true,
      },
    ],
    'jsx-a11y/click-events-have-key-events': [
      'warn',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: [
          'function-expression',
          'function-declaration',
          'arrow-function',
        ],
        unnamedComponents: 'function-expression',
      },
    ],
    // 'no-param-reassign': [2, { props: false }],
    // 'prefer-const': 'error',
    // quotes: ['error', 'single'],
    // 'max-len': ['error', { code: 100 }],
    // 'comma-dangle': ['error', 'always-multilinbe'],
    // semi: ['warn', 'always'],
    // allowShortCircuit: true,
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
