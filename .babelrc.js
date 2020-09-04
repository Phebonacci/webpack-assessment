module.exports = {
  "presets": [
    "@babel/preset-react",
    "@babel/preset-env"
  ],
  "env": {
    "development": {
      "presets": [
        ["@babel/preset-react", {
          "development": true
        }],
        ["@babel/preset-env", {
          debug: true,
          modules: false
        }]
      ]
    }
  }
}
