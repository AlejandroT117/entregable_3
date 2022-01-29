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

app.get('/', (req, res)=>{
  res.send('<h1 style="color: blue">Bienvenidos a la app de Alejandro T<h1/>')
})

app.get('/productos', (req,res)=>{
  productos.getAll().then((obj)=>{
    const string_obj = JSON.stringify(obj)

    res.send(`Hora actual: ${moment().format('DD/MM/YYYY HH:mm:ss')}\n Lista de productos actual: ${string_obj}`)
  
  })

})


app.get('/productoRandom', (req, res)=>{
  productos.getAll().then((obj)=>{

    const random = Math.floor(Math.random()*obj.length)
    const string_obj = JSON.stringify(obj[random])

    res.send(`Producto random: ${string_obj}`)
  
  })
})


const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
  console.log(`Escuchando en el puerto ${PORT}`)
})