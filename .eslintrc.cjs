module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'no-unused-vars': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'off',
    'max-len': 'off',
    'require-jsdoc': 'off',
    'newlines-between-class-members': 'off',
    'new-cap': 'off',
    'prefer-rest-params': 'off',
    'no-var': 'off',
    'no-invalid-this': 'off',
    'prefer-const': 'off',
    'react/display-name': 'off',
    'prefer-spread': 'off',
    'guard-for-in': 'off',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
