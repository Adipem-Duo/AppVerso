
exports.up = function(knex) {
    return knex.schema.createTable('usuario', function (table) {
        table.increments('id').primary();
        table.string('email', 255).notNullable();
        table.string('password', 300).notNullable();
        table.string('nome', 255).notNullable();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('usuario')
};
