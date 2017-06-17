import crypt from '../utils/crypt';

/**
 * Seed users table.
 *
 * @param  {Object} knex
 * @return {Promise}
 */
export function seed(knex) {
  // Deletes all existing entries
  return knex('users').truncate()
    // User password is set as `password123`
    .then(() => crypt.hash('password123'))
    .then(password => {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Saugat Acharya',
          email: 'saugat@gmail.com',
          username: 'saugat',
          password: password,
          updated_at: new Date()
        },
        {
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          username: 'johndoe',
          password: password,
          updated_at: new Date()
        }
      ]);
    });
}
