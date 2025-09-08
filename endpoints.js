require('dotenv').config()

const express = require("express");
const { PrismaClient } = require("./generated/prisma");

const email = require("@sendgrid/mail");

email.setApiKey(process.env.SENDGRID_API_KEY);
const { RENT_CONFIRMATION_TEMPLATE } = require("./utils/constants.js");

const prisma = new PrismaClient();
const router = express.Router();

router.get("/cars", async (req, res) => {
  //   ira retornar uma lista de carros com status 200
  const allCars = await prisma.car.findMany();

  res.status(200).json(allCars);
});

router.post("/cars", async (req, res) => {
  console.log(req.body);
  const car = {
    name: req.body.name,
    category: req.body.category,
    seats: req.body.seats,
    price: req.body.price,
    transmission: req.body.transmission,
    fuel: req.body.fuel,
    image: req.body.image,
    available: req.body.available,
  };

  //   ira adicionar um carro com status 201
  const newCar = await prisma.car.create({
    data: car,
  });
  res.status(201).json(newCar);
});

router.delete("/cars/:id", async (req, res) => {
  try {
    const deletedCar = await prisma.car.delete({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(deletedCar);
  } catch (error) {
    res.status(404).json({ error: "Car not found" });
  }
});

router.put("/cars/:id", async (req, res) => {
  try {
    const updatedCar = await prisma.car.update({
      where: {
        id: req.params.id,
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
      },
    });

    res.status(200).json(updatedCar);
  } catch (error) {
    res.status(404).json({ error: "Car not found" });
  }
});

router.get("/send-email", async (req, res) => {
  const emailContent = {
    to: "gabrielangelolira@gmail.com",
    from: "gabrieldigital945@gmail.com",
    subject: "Sending an email using SendGrid",
    html: RENT_CONFIRMATION_TEMPLATE,
  };
  
  try {
    await email.send(emailContent);
    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar email" });
  }
});

module.exports = router;