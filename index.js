//Units conversion
const conversionRate = 3.6; // 1 m/s = 3.6
km/h

const object = calcNewVel({
  // velocity is an object with 'value' and 'measurement' properties
  velocity: {
    value: 10000, // Initial velocity value (10000 km/h)
    measurement: "km/h", // Unit of measurement for velocity
  },
  // acceleration is an object with 'value' and 'measurement' properties
  acceleration: {
    value: 3, // Acceleration value (3 m/s^2)
    measurement: "m/s^2", // Unit of measurement for acceleration
  },
  // timeSeconds is an object with 'value' and 'measurement' properties
  timeSeconds: {
    value: 3600, // Time value (3600 seconds or 1 hour)
    measurement: "s", // Unit of measurement for time
  },
  // distance is an object with 'value' and 'measurement' properties
  distance: {
    value: 0, // Initial distance value (0 km)
    measurement: "km", // Unit of measurement for distance
  },
  // fuel is an object with 'value' and 'measurement' properties
  fuel: {
    value: 5000, // Initial fuel value (5000 kg)
    measurement: "kg", // Unit of measurement for fuel
  },
  // fuelBurnRate is an object with 'value' and 'measurement' properties
  fuelBurnRate: {
    value: 0.5, // Fuel burn rate value (0.5 kg/s)
    measurement: "kg/s", // Unit of measurement for fuel burn rate
  },
});

//Helper function to check if a value is a valid number
function isValidNumber(value) {
  return typeof value === "number" && isFinite(value);
}

// Check Velocity
if (!isValidNumber(object.velocity.value) || object.velocity.value <= 0) {
  throw new Error("Initial velocity must be a positive number.");
}

// Check acceleration
if (!isValidNumber(object.acceleration.value) || object.acceleration.value <= 0) {
  throw new Error("Acceleration must be a positive number.");
}

// Check timeSeconds
if (!isValidNumber(object.timeSeconds.value) || object.timeSeconds.value < 0) {
  throw new Error("Time value must be a positive number.");
}

// Check distance
if (!isValidNumber(object.distance.value) || object.distance.value < 0) {
  throw new Error("Initial distance must be a non-negative number.");
}

// Check fuel
if (!isValidNumber(object.fuel.value) || object.fuel.value < 0) {
  throw new Error("Initial fuel value must be a positive number.");
}

// Check fuelBurnRate
if (!isValidNumber(object.fuelBurnRate.value) || object.fuelBurnRate.value < 0) {
  throw new Error("Fuel burn rate must be a positive number.");
}

//Calculating new distance
const newDistance = object.distance.value + (object.velocity.value * oblect.timeSeconds.value);

//Calculating remaining fuel
const remainingFuel = object.fuel.value - (object.fuelBurnRate.value * object.timeSeconds.value);

// A function named calcNewVel that takes an object props as its argument.
function calcNewVel(props) {
  // Check if props is provided, throw an error if not
 if (!props) throw new Error("props is required");

 
 // Destructuring the required properties from props
 const {velocity, acceleration, timeSeconds, distance, fuel, fuelBurnRate,} = props;

 // this code block checks if all the required properties (velocity, acceleration, timeSeconds, distance, fuel, and fuelBurnRate) are provided, if noe it will throw an error
   if (!velocity || !acceleration || !timeSeconds || !distance || !fuel || !fuelBurnRate) {
     throw new Error("All properties are required");
   }

 // this code is validating the measurement properties of various objects against expected units
 if (velocity.measurement !== "km/h") throw new Error("Invalid measurement unit for velocity. Expected: km/h");
 if (acceleration.measurement !== "m/s^2") throw new Error("Invalid measurement unit for acceleration. Expected: m/s^2");
 if (timeSeconds.measurement !== "s") throw new Error("Invalid measurement unit for time. Expected: s");
 if (distance.measurement !== "km") throw new Error("Invalid measurement unit for distance. Expected: km");
 if (fuel.measurement !== "kg") throw new Error("Invalid measurement unit for fuel. Expected: kg");
 if (fuelBurnRate.measurement !== "kg/s") throw new Error("Invalid measurement unit for fuel burn rate. Expected: kg/s");  

 // Calculate the new velocity
 const newVelocity = velocity.value + (acceleration.value * timeSeconds.value) * conversionRate;
  
 // this code creates a new object that contains all the properties from the props object, and returns the new Velocity
 return {...props, velocityKm: newVelocity};

 }

// declaring a variable newVelocity and assigning it the value returned by velocityKm
let newVelocity = object.velocityKm;

// Consoling the output for the corrected new velocity, distance and remaining fuel
console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);















/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)


const d2 = d + (vel*time) //calcultes new distance
const rf = fbr*time //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






