

exports.up = function(knex) {
    return knex.schema.createTable("endereco", function (table) {
        table.increments('id').primary();
        table.string("apelido", 40);
        table.string("logradouro", 150);
        table.string("complemento", 40);
        table.integer("numero")
        table.string("cidade", 150);
        table.string("uf", 2);
        table.string("cep", 9);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("endereco");
};
