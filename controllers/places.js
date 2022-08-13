const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})


router.post('/', (req, res) => {
 res.send('POST/places stub')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  res.send('GET /places/:id stub')
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

//POST
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


//DELETE
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router









// const { application } = require('express')

// const router = require('express').Router()
// const places = require('../models/places')

// /*router.get('/', (req,res)=>{
//     res.send('GET/places')
// })*/



// //index
// router.get('/', (req, res) =>{
//         res.render('places/index',{places})
// })

// //get places new route
// router.get('/new', (req, res) => {
//   res.render('places/new')
// })

// //post.places route
// router.post('/', (req, res) => {
//     console.log(req.body)
//     if (!req.body.pic) {
//       req.body.pic = 'http://placekitten.com/100/100'
//     }
//     if (!req.body.city) {
//       req.body.city = 'Anytown'
//     }
//     if (!req.body.state) {
//       req.body.state = 'USA'
//     }
//     places.push(req.body)
//     res.redirect('/places')
//   })
  
//   //show page
//   router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     console.log(req.params.id)
//     // if (isNaN(id)) {
//     //   res.render('error404')
//     // }
//     // else {
//     //   res.render('places/show', {place:places[id], id})
//     // }
//     res.render('places/show', {place: places[id], id})
//   })
  

//  //edit

//  router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     res.render('places/edit', { place: places[id] })
//   }
// })

// //delete
// router.delete('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     places.splice(id,1)
//     res.redirect('/places')
//   }
// })

// module.exports=router