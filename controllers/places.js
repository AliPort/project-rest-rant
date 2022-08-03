const { application } = require('express')

const router = require('express').Router()
const places = require('../models/places.js')

/*router.get('/', (req,res)=>{
    res.send('GET/places')
})*/



//places index route
router.get('/', (req, res) =>{
        res.render('places/index',{places})
})

//get places new route
router.get('/new', (req, res) => {
  res.render('places/new')
})

//post.places route
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      req.body.pic = 'http://placekitten.com/100/100'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
  //show page
  router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else {
      res.render('places/show', {place:places[id], id})
    }
  })
  
//delete
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id,1)
    res.redirect('/places')
  }
})
 //edit

 router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})



module.exports=router