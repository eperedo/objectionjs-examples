require("./connection");
const Sale = require("./Sale.js");

async function saveSaleWithTransaction() {
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
  try {
    const tx = await Sale.transaction(async trx => {
      const saleInserted = await Sale.query(trx).insertGraph(newSale);
      return saleInserted;
    });
    console.log(tx);
  } catch (err) {
    // Here transaction has already been rolled back
    console.log(err);
  }
}

saveSaleWithTransaction();
