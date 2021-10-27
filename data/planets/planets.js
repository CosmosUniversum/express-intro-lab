const planets = [
  {name: 'Mercury', diameter: '4,878 km', _id: 1011},
  {name: 'Venus', diameter: '12,104 km', _id: 1012},
  {name: 'Earth', diameter: '12,760 km', _id: 1013},
  {name: 'Mars', diameter: '6,787 km', _id: 1014},
  {name: 'Jupiter', diameter: '139,822 km', _id: 1015},
  {name: 'Saturn', diameter: '120,500 km', _id: 1016},
  {name: 'Uranus', diameter: '51,120 km', _id: 1017},
  {name: 'Neptune', diameter: '49,530 km', _id: 1018},
  {name: 'Pluto', diameter: '2,301 km', _id: 1019},
]

const findPlanets = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, planets)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	findPlanets
}