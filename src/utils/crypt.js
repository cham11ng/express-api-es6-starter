import bcrypt from 'bcrypt';

const crypt = {
  /**
   * Create a bcrypt hash for a string.
   *
   * @param {String} string
   * @returns {Promise}
   */
  hash(string) {
    let saltRounds = parseInt(process.env.AUTH_SALT_ROUNDS);

    return bcrypt.hash(string, saltRounds);
  },

  /**
   * Compare a string with the hash.
   *
   * @param {String} string
   * @param {String} hash
   * @returns {Promise}
   */
  compare(string, hash) {
    return bcrypt.compare(string, hash);
  }
};

export default crypt;
