// Code your solution in this file!

// .slice() returns the value of the index
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
// Array containing the two functions as its elements
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (number) => {
  return function (num) {
    return number * num;
  };
};
const quadruple = createFareMultiplier(4);
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
console.log(double(5));
console.log(triple(5));
// Function to select different drivers based on the provided function
function selectDifferentDrivers(drivers, selectingFunction) {
  return selectingFunction(drivers);
}
