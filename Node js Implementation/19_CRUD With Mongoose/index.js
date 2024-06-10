const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = new Product({
    name: "Iphone 11",
    price: 1000,
    brand: "Apple",
    category: "Mobile",
  });
  const result = await data.save();
  console.log(result);
};

//saveInDB();

const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "Iphone 11" },
    {
      $set: { price: 550, name: "max pro 6" },
    }
  );
  console.log(data);
};

//updateInDB();

const deleteInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.deleteOne({ name: "Iphone 10" });
  console.log(data);
};

//deleteInDB();

const findInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.find({ name: "Iphone 10" });
  console.log(data);
};

findInDB();
