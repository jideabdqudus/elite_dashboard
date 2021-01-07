import express  from 'express'
const  router = express.Router();
import invCtrl  from '../controller/investmentCntroller.js'
import  passport from  'passport'
const auth = passport.authenticate('jwt',{session:false})
import Role  from '../helper/Role.js'

/* GET home page. */

// registeration route
router.post("/create_investment",
auth,
Role(["admin"]),
invCtrl.createInvestment);


router.delete("/delete_each_product/:productId",
auth,
Role(["admin"]),
invCtrl.deleteEachProduct);

router.put("/edit_product/:productId",
auth,
Role(["admin"]),
invCtrl.editProduct);

router.put("/edit_product/:productId",
auth,
Role(["admin"]),
invCtrl.editProduct);

router.get("/view_all_product",
auth,
Role(["admin","user"]),
invCtrl.viewAllProduct);


router.get("/moment",
// auth,
// Role(["admin"]),
invCtrl.moment);


router.get("/fetch__investment",
auth,
Role(["admin","user"]),
invCtrl.fetch__investment);



export default  router;
