const { Pool } = require("pg");
require('dotenv').config();


// All of the following properties should be read from environment variables
module.exports = new Pool({
    host: process.env.PGHOST || "localhost", // or wherever the db is hosted
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT || 5432 // The default port
});