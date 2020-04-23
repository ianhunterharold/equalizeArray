function equalizeArray(arr1) {
  let mostCommonHash = {};
  // map array to object key value pairs
  for (let i=0; i<arr1.length; i++){
    if (mostCommonHash[arr1[i]] === undefined){
      mostCommonHash[arr1[i]] = 1;
    } else {
      mostCommonHash[arr1[i]] += 1 
    }
  }
// get max value in object 
let valuesOfObject = Object.values(mostCommonHash);
let max = Math.max(...valuesOfObject);

// return the .length of the array - max which will give you number of deletions needed
let numberOfDeletions = arr1.length - max;
return numberOfDeletions; 
}
const ar1= [2,2,2,1,1,4,4];
equalizeArray(ar1)

// edge case, what 
// solve as a human being

// look through the list and find the number that repeats itself the most 

// count how many times you need to delete the other numbers 

//say out loud you need to delete X 

// solving as a developer

  // find the most repeated value first

// any value that is not the same as the most repeated increments the count by one 

//return the total count that needs to be deleted 




