require('dotenv').config()
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userCtrl = {

    createUser: async  (req ,res) => {
        try {

            const {username , email , password} = req.body

            const user = await User.findOne({email: email})

            if(user) return res.status(400).send({error: 'This Email already exists'})

            const HashedPassword = await bcrypt.hash(password , 10)

            const newUser = new User({
                username: username,
                email: email,
                password: HashedPassword
            })

            await newUser.save()

        } catch (error) {
            return res.status(500).send({error: error.message});
        }
    },

    login: async (req ,res) => {
       
        try {
            const {email , password } = req.body
            const user = await User.findOne({email: email})

            if(!user) return res.status(400).send({error:'No user found with the specified email'})

            const valid = await bcrypt.compare(password , user.password)

            if(!valid) return res.status(400).send({error:'Invalid password'})
          
            const payload = {id:user._id , name:user.username}

            const token = jwt.sign(payload , process.env.ACCESS_TOKEN , {expiresIn:"1d" })

            res.json({token:token})

  
        } catch (error) {
            return res.status(500).send({error: error.message});
        }
    },

    verifiedToken:  (req , res) => {
           try {
                  
            const token = req.header('Authorization')

            if(!token) return res.status(400).send({error:'Authorized'})

            jwt.verify(token , process.env.ACCESS_TOKEN , async (err , verified) => {
                if(err) return res.status(500).send(false);

                const user = await User.findById(verified.id)
                if(!user) return res.send(false)

                return res.send(true)


            })
               
           } catch (error) {
               return res.status(500).send({error: error.message});
           }
    }

}

module.exports = userCtrl