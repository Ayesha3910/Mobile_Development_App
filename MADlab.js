
/**let numbers = [1, 2, 3, 4, 5];

console.log(4);/** */


/**push(): Adds one or more elements to the end of the array and returns the new length of the array.
 * 
 * let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]/** */

/**pop(): Removes the last element from the array and returns that element.

 * let arr = [1, 2, 3];
let removedElement = arr.pop();
console.log(removedElement); // 3
console.log(arr); // [1, 2]/** */

/**shift(): Removes the first element from the array and returns that element.

 * let arr = [1, 2, 3];
let removedElement = arr.shift();
console.log(removedElement); // 1
console.log(arr); // [2, 3]/** */

/**unshift(): Adds one or more elements to the beginning of the array and returns the new length of the array.

 * let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]/** */

/**slice(): Returns a new array containing a portion of the original array.

 * let arr = [1, 2, 3, 4, 5];
let subArr = arr.slice(1, 4);
console.log(subArr); // [2, 3, 4]/** */


/**splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

 * let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, "a", "b");
console.log(arr); /** */

/**join(): Joins all elements of an array into a string.

 * let arr = ["a", "b", "c"];
let str = arr.join("-");
console.log(str); // "a-b-c"/** */

/**sort(): Sorts the elements of an array in place and returns the sorted array.

 * let arr = [3, 2, 1];
arr.sort();
console.log(arr); // [1, 2, 3]
/** */

/**reverse(): Reverses the order of the elements of an array in place and returns the reversed array.

 * let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]/** */


/**filter(): Creates a new array with all elements that pass the test implemented by the provided function.

 * let arr = [1, 2, 3, 4, 5];
let filteredArr = arr.filter((el) => el > 2);
console.log(filteredArr); // [3, 4, 5]/** */
