const Contenedor = require('./contenedor')

const productos = new Contenedor('productos.txt')

const express = require('express');
const moment = require('moment');
const app = express()

const productoNuevo = {
  'nombre':'Redmi Note 10',
  'precio':'5999',
  'thumbnail':'mercadolibre.com.mx'
}


app.get('/', (req,res)=>{
  const objetos = productos.getAll().then((obj)=>{return obj})

  res.send(`Hora actual: ${moment().format('DD/MM/YYYY HH:mm:ss')}\n Lista de productos actual: ${objetos}`)
})


const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
  console.log(`Escuchando en el puerto ${PORT}`)
})