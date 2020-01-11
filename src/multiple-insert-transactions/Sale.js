// Sale.js
const { Model } = require("objection");
const path = require("path");

class Sale extends Model {
  static get tableName() {
    return "sales";
  }

  // this is the new code
  static get relationMappings() {
    return {
      details: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, "SaleDetail"),
        join: {
          from: "sales.id",
          to: "sales_details.sale_id"
        }
      }
    };
  }
}

module.exports = Sale;
