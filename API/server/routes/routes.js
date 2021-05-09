import express from "express"
import {showUsers, InsertUser} from "../controllers/users.js"
import {showEpreuves, InsertEpreuve} from "../controllers/epreuves.js"

const router = express.Router();

router.get('/users', showUsers)
router.post('/users', InsertUser)

router.get('/epreuves', showEpreuves)
router.post('/epreuves', InsertEpreuve)

export default router;