module.exports = {
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  testRegex: "./*.spec.(js|ts|tsx)?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
