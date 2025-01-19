const path = require("path");

module.exports = {
  entry: "./js/dashboard_main.js", // Specify the entry file
  output: {
    path: path.resolve(__dirname, "public"), // Output folder
    filename: "bundle.js", // Name of the bundled file
  },
  mode: "production", // Use 'development' or 'production' mode as needed
};
