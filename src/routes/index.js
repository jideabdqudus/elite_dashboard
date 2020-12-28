import express from "express";
import user from "./user.js";
import admin from "./admin.js";
import pay from "./payment.js";
import investment from "./investment.js";
const  router = express.Router();

router.use('/user',user)
router.use('/pay',pay)
router.use('/admin',admin)
router.use('/investment',investment)

export default router