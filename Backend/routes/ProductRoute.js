const Product = require("../models/Product");
const product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifiyToken");
const router = require("express").Router();

//CREAT
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const saveProduct = await newProduct.save();
    res.status(200).json(saveProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELTE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Products
router.get("/find/:id", async (req, res) => {
  try {
    const Product = await Product.findById(req.params.id);
    res.status(200).json(Product);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ALL  Products
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.Category;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({ categories: { $in: [qCategory] } });

    }else{
        product = await Product.find()
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
// // GET USER STATS
// router.get("/stats",verifyTokenAndAdmin,async(req,res)=>{
//   const date =new Date()
//   const lastYear= new Date(date.setFullYear(date.getFullYear()-1))
//   try{
//     const data = await User.aggregate([
//       {$match:{createAt:{$gte:lastYear}}},
//       {
//         $project:{
//           month:{$month:"$createAt"},
//         },
//       },
//       {
//         $group:{
//           _id:"$month",
//           total:{$sum:-1}
//         }
//       }
//     ])
//     res.status(200).json(data)
//   }catch(err){
//     res.status(500).json(err)
//   }
// })

module.exports = router;
