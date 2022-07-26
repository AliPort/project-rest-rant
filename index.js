require('dotenv').config()
const express = require('express')
const app = express()
const methodOveride=require('method-override')


//express settings
app.set('views',__dirname+'/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(methodOveride('_method'))


app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
  })
  

app.get('*', (req,res) => {
  res.status(404).send('<h1>404 Page</h1>')
})
  

app.listen(process.env.PORT)
