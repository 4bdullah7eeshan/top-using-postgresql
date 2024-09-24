const db = require("../db/queries");

async function getUsernames(req, res) {
  const searchQuery = req.query.search;
  let usernames;

  if (searchQuery) {
    usernames = await db.getSearchedUsernames(searchQuery);
  } else {
    usernames = await db.getAllUsernames();
  }

  console.log("Usernames: ", usernames);
  res.render("pages/index", { usernames, searchQuery });
}

async function createUsernameGet(req, res) {
  // render the form
  res.render("pages/new");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost
};
