import express  from 'express'
const  router = express.Router();
import payCtrl  from '../controller/paymentController.js'
import  passport from  'passport'
const auth = passport.authenticate('jwt',{session:false})
import Role  from '../helper/Role.js'

/* GET home page. */

// registeration route
router.get("/callback",
auth,
// Role(["admin"]),
payCtrl.callback);

export default  router;
// redirecturl
// "http://localhost:8080/v1/api/paystack/callback?trxref=1609997958985"