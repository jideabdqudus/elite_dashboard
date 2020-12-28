import express  from 'express'
const  router = express.Router();
import adminCtrl  from '../controller/adminCntroller.js'
import  passport from  'passport'
const auth = passport.authenticate('jwt',{session:false})
import Role  from '../helper/Role.js'

/* GET home page. */

// registeration route
router.get("/getALLUsers",
auth,
Role(["admin"]),
adminCtrl.getALLUsers);


router.get("/getEachUser/:userId",
auth,
Role(["admin"]),
adminCtrl.getEachUsers);



router.get("/adminDashboard",
auth,
Role(["admin"]),
adminCtrl.adminDashboard);


export default  router;
