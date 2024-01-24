const { readJsonFile, writeJsonFile } = require("./filesystem.js");

const blogJsonFilePath =
  process.env.TODOS_JSON_FILE_PATH || // optional noch konfigurierbar machen
  __dirname + "/../../data/blog-data.json";

function loadAllBlogs() {
  return readJsonFile(blogJsonFilePath);
}

function saveAllBlogs(newTodosArray) {
  return writeJsonFile(blogJsonFilePath, newTodosArray);
}

module.exports = {
  loadAllBlogs,
  saveAllBlogs,
};