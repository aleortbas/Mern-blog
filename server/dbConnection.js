const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tech_blog",
  password: "123456789",
  post: 5432,
});

module.exports = {
  pool,
};
