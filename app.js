const express = require('express')
const app = express()
const { engine } = require('express-handlebars')

const port = 3000

app.engine('.hbs',engine({extname:'.hbs'}))
app.set('view engine','.hbs')
app.set('views','./views')
app.use(express.static('public'))


app.get('/', (req,res) =>{
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) =>{
  res.render('index')
})

app.get('/restaurant/:id', (req, res) =>{
  const id = req.param.id
  res.send(`read restaurant:${id}`)
})

app.listen(port,()=>{
  console.log(`express server is running on http://localhost:${port}`)
})