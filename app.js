const express = require('express')
const app = express()
const { engine } = require('express-handlebars')

const port = 3000
const restaurants = require('./public/jsons/restaurants.json').results

app.engine('.hbs', engine({extname: '.hbs'})) //定義要使用的樣板引擎，其中參數 .hbs 是這個樣板引擎的名稱。
app.set('view engine', '.hbs') //設定的 view engine 是 hbs (handlebars)。
app.set('views', './views')
app.use(express.static('public'))


app.get('/', (req,res) =>{
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  res.render('index', { restaurants: restaurants })
})


app.get('/restaurant/:id', (req, res) =>{
  const id = req.params.id
  res.send(`read restaurant:${id}`)
})

app.listen(port,()=>{
  console.log(`express server is running on http://localhost:${port}`)
})