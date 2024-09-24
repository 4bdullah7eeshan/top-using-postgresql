const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function getSearchedUsernames(searchQuery) {
    const queryText = 'SELECT * FROM usernames WHERE username ILIKE $1';
    const queryParams = [`%${searchQuery}%`];
  
    const { rows } = await pool.query(queryText, queryParams);
    return rows;
}

module.exports = {
  getAllUsernames,
  insertUsername,
  getSearchedUsernames,
};
