import express from 'express';
import Car from '../models/car.js';



const router = express.Router();

//Get a list of all cars
router.get('/', async (req, res) => {
    //find all the cars in the collection
    const cars = await Car.find();
    //return a response.
    return res.status(200).json(cars);
});

//Get the cars from a specific year
router.get('/year/:year', async(req, res) => {
    //find all the cars in the collection
    const cars = await Car.find({year:req.params.year});
    //return a response.
    return res.status(200).json(cars);
})

router.post('/create', async (req, res) => {
    console.log("the body of the s request i", req.body)
    const car = await Car.create(req.body);

    return res.status(200).json(car);
})

export default router;