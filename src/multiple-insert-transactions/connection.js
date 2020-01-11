const { Model } = require("objection");
const Knex = require("knex");

// execute the migrations.sql file to create the database
// for the examples

const knex = Knex({
  client: "mysql2",
  debug: true,
  connection: {
    database: "sales_company",
    password: "root",
    user: "root",
    host: "localhost"
  }
});

Model.knex(knex);
