const express = require("express");
const app = express();
app.use(express.json());
require('dotenv').config();


const { PrismaClient } = require('@alexdemichieli/datasources')
const prisma = new PrismaClient()

app.get('/users', async (req, res) => {
    const users = await prisma.author.findMany()
    res.json(users)
  
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });