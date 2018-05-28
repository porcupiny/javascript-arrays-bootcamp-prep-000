var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}
 
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
 
function addElementToEndOfArray(array, element){
  return [...chocolateBars, candyString];
}
 
function destructivelyAddElementToEndOfArray(chocolateBars, candyString){
  chocolateBars.push(candyString);
  return chocolateBars;
}
 
function accessElementInArray(array, index){
  return array[index];
}
 
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}
 
function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1);
}
 
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
}
 
function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
