import Company from "../models/Company.js";
import bcrypt from 'bcrypt'
import generateToken from "../utils/generateToken.js";
import Feed from "../models/Feed.js";

//Register a New Company
export const registerCompany = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.json({ success: false, message: "Missing Details" })
    }
    try {
        const companyExists = await Company.findOne({ email })
        if (companyExists) {
            return res.json({ success: false, message: "Company already registered" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const company = await Company.create({
            email,
            password: hashPassword,
        })

        res.json({
            success: true,
            company: {
                _id: company.id,
                email: company.email,
            },
            token: generateToken(company._id)
        })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

//Company Login
export const loginCompany = async (req, res) => {
    const { email, password } = req.body
    try {
        const company = await Company.findOne({ email })
        if (await bcrypt.compare(password, company.password)) {

            res.json({
                success: true,
                company: {
                    _id: company.id,
                    email: company.email,
                    image: company.image,
                },
                token: generateToken(company._id)
            })
        } else {
            res.json({ success: false, message: "Invalid Email or Password" })
        }
    }
    catch (error) {
        res.json({ success: false, message: error.message })
    }

}

//Get company data
export const getCompanyData = async (req, res) => {
    try {
        const company = req.company
        res.json({ success: true, company })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}


//Update Feed data
export const AlumniFeed = async (req, res) => {
    const { name, professional, message } = req.body;

    if (!name || !professional || !message) {
        return res.json({ success: false, message: "Missing Details" });
    }

    try {
        const alumniFeed = await Feed.create({
            name,
            professional,
            message,
        });

        res.json({
            success: true,
            feed: {
                _id: alumniFeed._id,
                name: alumniFeed.name,
                professional: alumniFeed.professional,
                message: alumniFeed.message,
            },
            token: generateToken(alumniFeed._id),
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}


// Get All Testimonials  
export const getFeed = async (req, res) => {
    try {
        const testimonials = await Feed.find({}); // Fetch all testimonials from the Feed collection  

        res.json({
            success: true,
            testimonials: testimonials.map(testimonial => ({
                _id: testimonial._id,
                name: testimonial.name,
                professional: testimonial.professional,
                message: testimonial.message,
            })),
        });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};


// Delete a Testimonial  
export const deleteFeed = async (req, res) => {  
    const { testimonialId } = req.body;
    try {   
        if (!testimonialId) {
            return res.status(400).json({ success: false, message: 'Testimonial ID is required' });
        } 
        const testimonial = await Feed.findByIdAndDelete(testimonialId);  
        if (!testimonial) {
            return res.status(404).json({ success: false, message: 'Testimonial not found' });
        }       
        res.json({
            success: true,
            message: 'Testimonial deleted successfully',
        });
    } catch (error) {
       
        res.status(500).json({ success: false, message: error.message });
    }
};   