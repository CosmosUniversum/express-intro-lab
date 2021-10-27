import express from 'express'
import * as constellationsDb from './data/constellations/constellations.js'
import * as planetsDb from './data/planets/planets.js'

const app = express()

app.set('view engine', 'ejs')

app.get('/constellations', function(req, res) {
  constellationsDb.findConstellations({}, function(error, constellation, squareDegrees, _id) {
    res.render('constellations/index',{
      error,
      constellation,
      squareDegrees,
      _id
    })
  })
})

app.get('/planets', function(req, res) {
  planetsDb.findPlanets({}, function(error, planet, diameter, _id) {
    res.render('planets/index',{
      error,
      planet,
      diameter,
      _id
    })
  })
})

app.listen(7000, function(){
  console.log('Listening on port 7000')
})