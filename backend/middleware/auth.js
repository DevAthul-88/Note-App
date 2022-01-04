require('dotenv').config()
const jwt = require('jsonwebtoken');

const auth = (req , res , next) => {

    try {
        const token = req.header('Authorization')
        
        if(!token) return res.status(400).send({message: 'UnAuthorized'})

        jwt.verify(token , process.env.ACCESS_TOKEN , (err , user) => {
            if(err) return res.status(400).send({message:'Authorization is not valid'})

            req.user = user
            next()
        })

    } catch (error) {
        return res.status(500).send({error: error.message});
    }

}

module.exports = auth;