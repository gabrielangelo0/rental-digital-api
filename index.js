const express = require('express')
const cors = require('cors');

const { PrismaClient } = require('./generated/prisma')

const prisma = new PrismaClient()

const app = express()
const port = 3001

app.use(cors());
app.use(express.json());

let cars = []


app.get('/cars', async (req, res) => {
    //   ira retornar uma lista de carros com status 200
    const allCars = await prisma.car.findMany()

    res.status(200).json(allCars)
})

app.post('/cars', async (req, res) => {
    console.log(req.body)
    const car = {
        name: req.body.name,
        category: req.body.category,
        seats: req.body.seats,
        price: req.body.price,
        transmission: req.body.transmission,
        fuel: req.body.fuel,
        image: req.body.image,
        available: req.body.available,
    }

    //   ira adicionar um carro com status 201
    const newCar = await prisma.car.create({
        data: car
    })
    res.status(201).json(newCar)
})

app.delete('/cars/:id', async (req, res) => {
    try {
        const deletedCar = await prisma.car.delete({
            where: {
                id: req.params.id
            }
        })

        res.status(200).json(deletedCar)
    } catch (error) {
        res.status(404).json({ error: "Car not found" })
    }
})

app.put('/cars/:id', async (req, res) => {
    try {
        const updatedCar = await prisma.car.update({
            where: {
                id: req.params.id
            },
            data: {
                name: req.body.name,
                category: req.body.category,
                seats: req.body.seats,
                price: req.body.price,
                transmission: req.body.transmission,
                fuel: req.body.fuel,
                image: req.body.image,
                available: req.body.available,
            }
        })

        res.status(200).json(updatedCar)
    } catch (error) {
        res.status(404).json({ error: "Car not found" })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
