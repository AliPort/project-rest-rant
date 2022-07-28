const { application } = require('express')

const router = require('express').Router()

/*router.get('/', (req,res)=>{
    res.send('GET/places')
})*/

//get places new route
router.get('/new', (req, res) => {
  res.render('places/new')
})

//places index route
router.get('/', (req, res) =>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index',{places})
})

//post.places route
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


module.exports=router