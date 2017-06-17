/**
 * Create users table.
 *
 * @param  {Object} knex
 * @return {Promise}
 */
export function up(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('name').notNull();
    table.string('email').notNull();
    table.string('username').notNull();
    table.string('password').notNull();
    table.timestamp('created_at').notNull().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNull();
  });
}

/**
 * Drop users table.
 *
 * @param  {Object} knex
 * @return {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable('users');
}
