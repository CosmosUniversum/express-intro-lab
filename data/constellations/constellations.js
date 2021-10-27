const constellations = [
  {name: 'Andromeda', squareDegrees: 722, _id: 1001},
  {name: 'Cygnus', squareDegrees: 804, _id: 1002},
  {name: 'Draco', squareDegrees: 1083, _id: 1003},
  {name: 'Hercules', squareDegrees: 1225, _id: 1004},
  {name: 'Lyra', squareDegrees: 286, _id: 1005},
  {name: 'Vulpecula', squareDegrees: 268, _id: 1006},
]

const findConstellations = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, constellations)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	findConstellations
}