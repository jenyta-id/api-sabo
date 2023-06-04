const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `INSERT INTO cctv (name, location, coordinat, used, protocol, ip, remark) VALUES (?,?,?,?,?,?,?)`,
      [data.name, data.location, data.coordinat, data.used, data.protocol, data.ip, data.remark],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getCctvByCctvId: (id, callback) => {
    pool.query(
      `SELECT * FROM cctv WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  
  getUserByCctvLocation: (location, callback) => {
    pool.query(
      `SELECT * FROM users WHERE location = ?`,
      [location],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getCctvs: callback => {
    pool.query(`SELECT * FROM cctv`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getLocationCctv: callback => {
    pool.query(`SELECT location FROM cctv`, [], (error, results) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
  updateCctv: (data, callback) => {
    pool.query(
      `UPDATE cctv SET name=?, location=?, coordinat=?, used=?, protocol=?, ip=?, remark=? WHERE id=?`,
      [data.name, data.location, data.coordinat, data.used, data.protocol, data.ip, data.remark, data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  deleteCctv: (data, callback) => {
    pool.query(
      `DELETE FROM cctv WHERE id=?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  }
};
