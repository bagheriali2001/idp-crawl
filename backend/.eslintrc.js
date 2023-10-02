module.exports = {
    env: {
        browser: false,
        commonjs: true,
        es2021: true,
        node: true,
    },
    // extends: "eslint:recommended",
    plugins: ["prettier"],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "prettier/prettier": ["error"],
        // "no-unused-vars": "off",
    },
};
