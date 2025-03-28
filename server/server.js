import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node"
import { clerkWebhooks } from './controllers/webhooks.js'
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import userRoutes from './routes/useRoutes.js'
import { clerkMiddleware } from '@clerk/express'


//Initialize Express
const app = express()

//connect to database
await connectDB()
await connectCloudinary()


//Middlewares
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

//Routes
app.get('/', (req, res) => res.send("API Working"))
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});
app.post('/webhooks', clerkWebhooks)
app.get('/webhooks', (req, res) => {
    res.status(405).send('Method Not Allowed');
    console.log(res)
});
app.use('/api/company', companyRoutes)
app.use('/api/users', userRoutes)

//PORT 
const PORT = process.env.PORT || 5000;

//Sentry error handler
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
