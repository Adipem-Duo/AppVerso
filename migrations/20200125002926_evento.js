
exports.up = function(knex) {
    return knex.schema.createTable("evento", function (table) {
        table.increments("id").primary();
        table.string().notNull();
  })
};

exports.down = function(knex) {
  
};
