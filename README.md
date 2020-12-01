# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @raficelkouche/lotide`

**Require it:**

`const _ = require('@raficelkouche/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: checks whether 2 variables of a primitive data type are equal or not, returns a boolean
* `assertArraysEqual(actual,expected)`: checks whether 2 arrays are equal, returns a boolean
* `assertObjectEqual(actual,expected)`: checks whether 2 objects are equal, returns a boolean
* `countLetters(string)`: counts the number of letters in a string (excluding white space)
* `countOnly(allItems, itemsToCount)`: takes in a collection of items and returns a count for a specific subset 
* `eqArrays(arrayA, arrayB)`: compares two arrays and returns true if they are equal, otherwise false
* `eqObjects(objA, objB)`: compares two objects and returns true if they are equal, otherwise false
* `findKey(object,callback)`: returns the first key in which the callback function returns a truthy value
* `findKeyByValue(object, value)`: looks for a value in a given object, returns the key where that property exists otherwise returns undefined
* `flatten(array)`: takens in an array of elements (maximum 1 level nesting) and spreads out all the elements 
* `head(array)`: returns the first element of an array
* `letterPositions(sentence)`: given a sentence, returns an object with the locations of all the occurrences of all the letters
* `map(array,callback)`: calls the callback function on every element in an array and returns a new array
* `middle(array)`: given an array, returns the middle element. If the array length is odd, returns a single element, otherwise returns an array with 2 elements
* `tail(array)`: returns an array with all the elements of an input except for the first element.
* `takeUntil(array, callback)`: keeps collecting items from a provided array until the callback provided returns a truthy value.
* `without(array,arrayOfItemsToRemove)`: returns an array that contains all the elements that are not part of the arrayOfItemsToRemove array