exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', t => {
    t.increments('id').primary();
    t.string('name').notNullable();
    t.string('description');
    t.integer('creator').references('users.id');
    t.datetime('start_date');
    t.datetime('end_date');
    t.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('events');
};
