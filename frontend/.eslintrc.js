module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    
    "linebreak-style": 0,
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
      },
    ],
  },
};
