require("./connection");
const Sale = require("./Sale.js");

async function saveSaleNullQuantity() {
  const newSale = {
    subtotal: 10,
    taxes: 8,
    total: 18,
    // property details because that's how we
    // call it in the relationMappings
    details: [
      {
        product: "Tomato",
        // some way this value is null 😭
        quantity: null,
        price: 4
      },
      {
        product: "Potato",
        quantity: 2,
        price: 3
      }
    ]
  };
  const saleInserted = await Sale.query().insertGraph(newSale);
  console.log(`New Sale Id is ${saleInserted.id}`);
  return saleInserted;
}

saveSaleNullQuantity();
