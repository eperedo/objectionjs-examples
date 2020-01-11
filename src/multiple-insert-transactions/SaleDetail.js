// SaleDetail.js
const { Model } = require("objection");

class SaleDetail extends Model {
  static get tableName() {
    return "sales_details";
  }
}

module.exports = SaleDetail;
