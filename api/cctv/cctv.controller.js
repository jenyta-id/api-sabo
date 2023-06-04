const { create, getCctvByCctvId, getCctvs, updateCctv, deleteCctv,getLocationCctv } = require("./cctv.service");
const getUserByCctvLocation = require("./cctv.service").getUserByCctvLocation;

module.exports = {
  createCctv: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },

  getCctvByCctvId: (req, res) => {
    const id = req.params.id;
    getCctvByCctvId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "CCTV Tidak Ditemukan!"
        });
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },

  getCctvs: (req, res) => {
    getCctvs((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },

  getUserByCctvLocation: (req, res) => {
    const location = req.params.location;
    getUserByCctvLocation(location, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },  

  getLocationCctv: (req, res) => {
    getLocationCctv((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },

  updateCctv: (req, res) => {
    const body = req.body;
    updateCctv(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Updated successfully"
      });
    });
  },
  
  deleteCctv: (req, res) => {
    const data = req.body;
    deleteCctv(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Operation Success"
        });
      }
      return res.json({
        success: 1,
        message: "CCTV deleted successfully"
      });
    });
  }
};
