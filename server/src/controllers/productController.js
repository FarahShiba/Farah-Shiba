const { db } = require("../config/db");
const ApiError = require("../utilities/ApiError");

module.exports = {
  // [1A] get all Products
  async getAllProducts(req, res, next) {
    try {
      // Store the collection reference in variable
      const productRef = db.collection("products");
      const snapshot = await productRef
        .where("isAvailable", "==", "true")
        .orderBy("name", "asc")
        .get();

      // [400 ERROR]
      if (snapshot.empty) {
        return next(
          ApiError.badRequest("The items you were looking for do not exist")
        );

        // SUCCESS: Push object properties to array and send to client
      } else {
        let docs = [];
        snapshot.forEach((doc) => {
          docs.push({
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            brand: doc.data().brand,
            color: doc.data().color,
            category: doc.data().category,
            price: doc.data().price,
            size: doc.data().size,
            onSale: doc.data().onSale,
            isAvailable: doc.data().isAvailable,
          });
        });
        res.send(docs);
      }
      // [500 ERROR]
    } catch (err) {
      return next(
        ApiError.internal("The items selected could not be found", err)
      );
    }
  },
};
