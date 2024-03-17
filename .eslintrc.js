module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "esnext": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "no-undef" : 1,
        'no-unused-vars': 1,
        'no-prototype-builtins': 0,
        'no-mixed-spaces-and-tabs': 1,
        'no-extra-semi': 1,
        'no-fallthrough': 1,
        'no-redeclare': 1,
        'no-empty': 1,
        'no-constant-condition': 1,
        'no-inner-declarations': 0,
        'no-func-assign': 0,
        'no-cond-assign': 0,
        'no-lonely-if': 1,
        'curly': 1
    }
};