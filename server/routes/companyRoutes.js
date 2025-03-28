import express from 'express'
import { AlumniFeed, deleteFeed, getCompanyData, getFeed, loginCompany, registerCompany } from '../controllers/companyController.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router = express.Router()

//Register a Company 
router.post('/register', registerCompany)

//Alumni Feedback
router.post('/feed', AlumniFeed)

router.get('/getFeed', getFeed )

router.post('/deleteFeed', deleteFeed )

//Company Login
router.post('/login', loginCompany)

//Get company data
router.get('/company', protectCompany, getCompanyData)


export default router;