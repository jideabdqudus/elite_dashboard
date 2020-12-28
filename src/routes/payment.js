import express  from 'express'
const  router = express.Router();
import payCtrl  from '../controller/paymentController.js'
import  passport from  'passport'
const auth = passport.authenticate('jwt',{session:false})
import Role  from '../helper/Role.js'

/* GET home page. */

// registeration route
router.get("/getALLUsers",
auth,
Role(["admin"]),
payCtrl.pay);

export default  router;
