// Convert inches to centimeters
function convertInchesToCentimeters(inches) {
  return inches * 2.54;
}

// Convert centimeters to inches
function convertCentimetersToInches(centimeters) {
  return centimeters / 2.54;
}

// Example conversions
console.log(convertInchesToCentimeters(10)); // Output: 25.4
console.log(convertCentimetersToInches(25.4)); // Output: 10