module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "jest": "readonly",
        "beforeEach": "readonly",
        "expect": "readonly",
        "describe": "readonly",
        "it": "readonly",
        "mapboxgl": "readonly",
        "SpeechRecognition": "readonly",
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": "off",
        "no-unused-vars": ["error", { varsIgnorePattern: "map" }],
        "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }]
    }
};
