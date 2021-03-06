module.exports = [
  { question: 'Given a map, count how many of the keys "a", "b" and "c" are part of the map. Return the result as an integer.',
    title: 'Map-1',
    name: 'mapCount',
    inputType: "map",
    outputType: "int",
    inputs: [
      '([["a", "aaa"], ["b", "bb"], ["c", "cake"]])',
      '([["yogurt", "salt"], ["bread", "butter"]])',
      '([["a", "aa"], ["b", "bbb"]])',
      '([["a", "aaa"]])',
      '([["b", "bbb"]])',
      '([[]])',
      '([["a", "aaa"], ["c", "cake"]])',
      '([["a", "a"], ["b", "b"], ["c", "cake"]])',
      '([["ab", "nope"], ["b", "bbb"], ["c", "ccc"]])',
      '([["b", "b"], ["c", "cake"]])',
      '([["a", "a"], ["c", "cake"]])',
      '([["c", "cat"], ["d", "dog"]])',
  ] },
  { question: 'Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that value, and set the key "a" to have the value "". Basically "b" is a bully, taking the value and replacing it with the empty string.',
    title: 'Map-1',
    name: 'mapBully',
    inputType: "map",
    outputType: "map",
    inputs: [
    '([["a", "candy"], ["b", "dirt"]])',
    '([["a", "candy"]])',
    '([["a", "candy"], ["b", "carrot"], ["c", "meh"]])',
    '([["b", "carrot"]])',
    '([["c", "meh"]])',
    '([["a", "sparkle"], ["c", "meh"]])',
  ] },
  { question: 'Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that same value. In all cases remove the key "c", leaving the rest of the map unchanged.',
    title: 'Map-1',
    name: 'mapShare',
    inputType: "map",
    outputType: "map",
    inputs: [
    '([["a", "aaa"], ["b", "bbb"], ["c", "ccc"]])',
    '([["b", "xyz"], ["c", "ccc"]])',
    '([["a", "aaa"], ["c", "meh"], ["d", "hi"]])',
    '([["a", "xyz"], ["b", "1234"], ["c", "yo"], ["z", "zzz"]])',
    '([["a", "xyz"], ["b", "1234"], ["c", "yo"], ["d", "ddd"], ["e", "everything"]])',
  ] },
  { question: 'Modify and return the given map as follows: for this problem the map may or may not contain the "a" and "b" keys. If both keys are present, append their 2 string values together and store the result under the key "ab".',
    title: 'Map-1',
    name: 'mapAB',
    inputType: "map",
    outputType: "map",
    inputs: [
    '([["a", "Hi"], ["b", "There"]])',
    '([["a", "Hi"]])',
    '([["b", "There"]])',
    '([["c", "meh"]])',
    '([["a", "aaa"], ["ab", "nope"], ["b", "bbb"], ["c", "ccc"]])',
    '([["ab", "nope"], ["b", "bbb"], ["c", "ccc"]])',
  ] },
  { question: 'Given a map of food keys and topping values, modify and return the map as follows: if the key "ice cream" is present, set its value to "cherry". In all cases, set the key "bread" to have the value "butter".',
    title: 'Map-1',
    name: 'topping1',
    inputType: "map",
    outputType: "map",
    inputs: [
    '([["ice cream", "peanuts"]])',
    '([[]])',
    '([["pancake", "syrup"]])',
    '([["bread", "dirt"], ["ice cream", "strawberries"]])',
    '([["bread", "jam"], ["ice cream", "strawberries"], ["salad", "oil"]])',
    '([["bread", "nutella"]])',
  ] },
  { question: 'Given a map of food keys and their topping values, modify and return the map as follows: if the key "ice cream" has a value, set that as the value for the key "yogurt" also. If the key "spinach" has a value, change that value to "nuts".',
    title: 'Map-1',
    name: 'topping2',
    inputType: "map",
    outputType: "map",
    inputs: [
      '([["ice cream", "cherry"]])',
      '([["spinach", "dirt"], ["ice cream", "cherry"]])',
      '([["yogurt", "salt"]])',
      '([["yogurt", "salt"], ["bread", "butter"]])',
      '([[]])',
      '([["ice cream", "air"], ["salad", "oil"]])',
  ] },
  { question: 'Given a map of food keys and topping values, modify and return the map as follows: if the key "potato" has a value, set that as the value for the key "fries". If the key "salad" has a value, set that as the value for the key "spinach".',
    title: 'Map-1',
    name: 'topping3',
    inputType: "map",
    outputType: "map",
    inputs: [
      '([["potato", "ketchup"]])',
      '([["potato", "butter"]])',
      '([["salad", "oil"], ["potato", "ketchup"]])',
      '([["toast", "butter"], ["salad", "oil"], ["potato", "ketchup"]])',
      '([[]])',
      '([["salad", "pepper"], ["fries", "salt"]])',
  ] },
  { question: 'Modify and return the given map as follows: if the keys "a" and "b" are both in the map and have equal values, remove them both.',
    title: 'Map-1',
    name: 'mapAB2',
    inputType: "map",
    outputType: "map",
    inputs: [
      '([["a", "aaa"], ["b", "aaa"], ["c", "cake"]])',
      '([["a", "aaa"], ["b", "bbb"]])',
      '([["a", "aaa"], ["b", "bbb"], ["c", "aaa"]])',
      '([["a", "aaa"]])',
      '([["b", "bbb"]])',
      '([["a", ""], ["b", ""], ["c", "ccc"]])',
      '([[]])',
      '([["a", "a"], ["b", "b"], ["z", "zebra"]])',
  ] },
  { question: 'Modify and return the given map as follows: if exactly one of the keys "a" or "b" has a value in the map (but not both), set the other to have that same value in the map.',
    title: 'Map-1',
    name: 'mapAB3',
    inputType: "map",
    outputType: "map",
    inputs: [
      '([["a", "aaa"], ["c", "cake"]])',
      '([["b", "bbb"], ["c", "cake"]])',
      '([["a", "aaa"], ["b", "bbb"], ["c", "cake"]])',
      '([["ccc", "ccc"]])',
      '([["c", "a"], ["d", "b"]])',
      '([[]])',
      '([["a", ""]])',
      '([["b", ""]])',
      '([["a", ""], ["b", ""]])',
      '([["aa", "aa"], ["a", "apple"], ["z", "zzz"]])',
  ] },
  { question: 'Modify and return the given map as follows: if the keys "a" and "b" have values that have different lengths, then set "c" to have the longer value. If the values exist and have the same length, change them both to an empty string.',
    title: 'Map-1',
    name: 'mapAB4',
    inputType: "map",
    outputType: "map",
    inputs: [
      '([["a", "aaa"], ["b", "bb"], ["c", "cake"]])',
      '([["a", "aa"], ["b", "bbb"], ["c", "cake"]])',
      '([["a", "aa"], ["b", "bbb"]])',
      '([["a", "aaa"]])',
      '([["b", "bbb"]])',
      '([["a", "aaa"], ["b", "bbb"], ["c", "cake"]])',
      '([["a", "a"], ["b", "b"], ["c", "cake"]])',
      '([["a", ""], ["b", "b"], ["c", "cake"]])',
      '([["a", "a"], ["b", ""], ["c", "cake"]])',
      '([["c", "cat"], ["d", "dog"]])',
      '([["ccc", "ccc"]])',
      '([["c", "a"], ["d", "b"]])',
      '([[]])',
      '([["a", ""], ["z", "z"]])',
      '([["b", ""], ["z", "z"]])',
      '([["a", "cat"], ["b", "dog"], ["c", "pig"]])',
  ] },



  { question: 'Given an array of strings, return a Map containing a key for every different string in the array, always with the value 0. For example the string "hello" makes the pair "hello":0. We\'ll do more complicated counting later, but for this problem the value is simply 0.',
    title: 'Map-2',
    name: 'word0',
    inputType: "array",
    outputType: "map",
    inputs: [
      '(["a", "b", "a", "b"])',
      '(["a", "b", "a", "c", "b"])',
      '(["c", "b", "a"])',
      '(["c", "c", "c", "c"])',
      '([])',
  ] },
  { question: 'Given an array of strings, return a Map containing a key for every different string in the array, and the value is that string\'s length.',
    title: 'Map-2',
    name: 'wordLen',
    inputType: "array",
    outputType: "map",
    inputs: [
      '(["a", "bb", "a", "bb"])',
      '(["this", "and", "that", "and"])',
      '(["code", "code", "code", "bug"])',
      '([])',
      '(["z"])',
      '(["are", "codes", "and", "cods"])',
      '(["apple", "banana", "tea", "coffee"])',
  ] },
  { question: 'Given an array of non-empty strings, create and return a Map as follows: for each string add its first character as a key with its last character as the value.',
    title: 'Map-2',
    name: 'pairs',
    inputType: "array",
    outputType: "map",
    inputs: [
      '(["code", "bug"])',
      '(["man", "moon", "main"])',
      '(["man", "moon", "good", "night"])',
      '([])',
      '(["a", "b"])',
      '(["are", "codes", "and", "cods"])',
      '(["apple", "banana", "tea", "coffee"])',
  ] },
  { question: 'The classic word-count algorithm: given an array of strings, return a Map with a key for each different string, with the value the number of times that string appears in the array.',
    title: 'Map-2',
    name: 'wordCount',
    inputType: "array",
    outputType: "map",
    inputs: [
      '(["a", "b", "a", "c", "b"])',
      '(["c", "b", "a"])',
      '(["c", "c", "c", "c"])',
      '([])',
      '(["this", "and", "this", ""])',
      '(["x", "y", "x", "Y", "X"])',
      '(["123", "0", "123", "1"])',
      '(["d", "a", "e", "d", "a", "d", "b", "b", "z", "a", "a", "b", "z", "x", "b", "f", "x", "two", "b", "one", "two"])',
      '(["apple", "banana", "apple", "apple", "tea", "coffee", "banana"])',
      '(["sask", "sask", "man", "ab", "sask", "man", "sask", "sask"])',
  ] },
  { question: 'Given an array of non-empty strings, return a Map with a key for every different first character seen, with the value of all the strings starting with that character appended together in the order they appear in the array.',
    title: 'Map-2',
    name: 'firstChar',
    inputType: "array",
    outputType: "map",
    inputs: [
      '(["salt", "tea", "soda", "toast"])',
      '(["aa", "bb", "cc", "aAA", "cCC", "d"])',
      '([])',
      '(["apple", "bells", "salt", "aardvark", "bells", "sun", "zen", "bells"])',
      '(["apple", "banana", "ant", "asp", "candy", "coffee", "boat"])',
  ] },
  { question: 'Loop over the given array of strings to build a result string like this: when a string appears the 2nd, 4th, 6th, etc. time in the array, append the string to the result. Return the empty string if no string appears a 2nd time.',
    title: 'Map-2',
    name: 'wordAppend',
    inputType: "array",
    outputType: "string",
    inputs: [
      '(["a", "b", "a"])',
      '(["a", "b", "a", "c", "a", "d", "a"])',
      '(["a", "", "a"])',
      '([])',
      '(["a", "b", "b", "a", "a"])',
      '(["a", "b", "b", "b", "a", "c", "a", "a"])',
      '(["a", "b", "b", "b", "a", "c", "a", "a", "a", "b", "a"])',
      '(["not", "and", "or", "and", "this", "and", "or", "that", "not"])',
      '(["a", "b", "c"])',
      '(["this", "or", "that", "and", "this", "and", "that"])',
      '(["xx", "xx", "yy", "xx", "zz", "yy", "zz", "xx"])',
  ] },
  { question: 'Given an array of strings, return a Map where each different string is a key and its value is true if that string appears 2 or more times in the array.',
    title: 'Map-2',
    name: 'wordMultiple',
    inputType: "array",
    outputType: "map",
    inputs: [
      '(["a", "b", "a", "c", "b"])',
      '(["c", "b", "a"])',
      '(["c", "c", "c", "c"])',
      '([])',
      '(["this", "and", "this"])',
      '(["d", "a", "e", "d", "a", "d", "b", "b", "z", "a", "a", "b", "z", "x"])',
  ] },
  { question: 'We\'ll say that 2 strings "match" if they are non-empty and their first chars are the same. Loop over and then return the given array of non-empty strings as follows: if a string matches an earlier string in the array, swap the 2 strings in the array. When a position in the array has been swapped, it no longer matches anything. Using a map, this can be solved making just one pass over the array. More difficult than it looks.',
    title: 'Map-2',
    name: 'allSwap',
    inputType: "array",
    outputType: "array",
    inputs: [
      '(["ab", "ac"])',
      '(["ax", "bx", "cx", "cy", "by", "ay", "aaa", "azz"])',
      '(["ax", "bx", "ay", "by", "ai", "aj", "bx", "by"])',
      '(["ax", "bx", "cx", "ay", "cy", "aaa", "abb"])',
      '(["easy", "does", "it", "every", "ice", "eaten"])',
      '(["list", "of", "words", "swims", "over", "lily", "water", "wait"])',
      '(["4", "8", "15", "16", "23", "42"])',
      '(["aaa"])',
      '([])',
      '(["a", "b", "c", "xx", "yy", "zz"])',
  ] },
  { question: 'We\'ll say that 2 strings "match" if they are non-empty and their first chars are the same. Loop over and then return the given array of non-empty strings as follows: if a string matches an earlier string in the array, swap the 2 strings in the array. A particular first char can only cause 1 swap, so once a char has caused a swap, its later swaps are disabled. Using a map, this can be solved making just one pass over the array. More difficult than it looks.',
    title: 'Map-2',
    name: 'firstSwap',
    inputType: "array",
    outputType: "array",
    inputs: [
      '(["ab", "ac"])',
      '(["ax", "bx", "cx", "cy", "by", "ay", "aaa", "azz"])',
      '(["ax", "bx", "ay", "by", "ai", "aj", "bx", "by"])',
      '(["ax", "bx", "cx", "ay", "cy", "aaa", "abb"])',
      '(["easy", "does", "it", "every", "ice", "eaten"])',
      '(["list", "of", "words", "swims", "over", "lily", "water", "wait"])',
      '(["4", "8", "15", "16", "23", "42"])',
      '(["aaa"])',
      '([])',
      '(["a", "b", "c", "xx", "yy", "zz"])',
  ] },
  { question: 'The given map has keys paired with an integer value. Iterate through the given map, and return the key that is paired with the largest integer. There will not be a tie for the largest integer. If the map given is empty, return null.',
    title: 'Map-2',
    name: 'mapLargest',
    inputType: "map",
    outputType: "string",
    inputs: [
      '([["a", 5], ["c", 4]])',
      '([["b", 2], ["c", 3]])',
      '([["a", 7], ["b", 8], ["c", 7]])',
      '([["cc", 2]])',
      '([["c", -1], ["d", -2]])',
      '([[]])',
      '([["a", 0], ["b", -2]])',
      '([["aa", 12], ["a", 11], ["z", 10]])',
  ] },
  { question: 'The given map has keys paired with a sentence. Iterate through the given map, and return the key that is paired with the sentence with the largest number of words. There will not be a tie for the longest sentence. Hint: You will probably want to use the .split() function.',
    title: 'Map-2',
    name: 'mapLongestSentence',
    inputType: "map",
    outputType: "string",
    inputs: [
      '([["a", "Peanut butter and jelly sandwiches."], ["c", "Once upon a time, something happened."]])',
      '([["b", "Who knows why he swallowed a fly?"], ["c", "Humpty Dumpty sat on a wall."]])',
      '([["a", "The stranger officiates the meal."], ["b", "Peanuts don\'t grow on trees, but cashews do."], ["c", "The lake is far from here."]])',
      '([["aa", "Pat ordered a ghost pepper pie."], ["a", "Nobody likes a cat wearing lipstick."], ["z", "The quick brown fox jumps over the lazy dog."]])',
  ] },
];
