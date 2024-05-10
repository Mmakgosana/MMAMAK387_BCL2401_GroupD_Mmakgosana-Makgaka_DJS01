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






