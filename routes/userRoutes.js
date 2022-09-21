import express from 'express';
import User from './../models/user.js';

const router = express.Router();

router.get('/', async(req,res) => {
    //getting users from user collection
    const users = await User.find();
    //return that information to the client
    return res.status(200).json(users);
});


router.post('/create', async (req, res) => {
    //extract the data we need to store from the req.body
    const {username, email, password, age, firstname,lastname, height, country}  = req.body;

    //We use the model and the create function, to create a new user document inside the collection.
    const user = await User.create({
      username: username,
      email: email,
      password: password,
      age: age,
      firstname: firstname,
      lastname: lastname,
      height: height,
      country: country,
    });

    //creating a user 
    return res.status(200).json({message:'User Created', user})
});


export default router;