# phase-4-codility-assessment

### .camelCase Method for Strings

The .camelCase method is a useful function in JavaScript for converting strings to camel case format. This method capitalizes the first letter of each word in a string and removes all spaces, resulting in a string with no spaces and all words starting with a capital letter.

Implementation

This implementation creates a prototype method on the String object, allowing any string to call the .camelCase method. The method works by splitting the string into an array of words using the space character as the delimiter, then using the map method to iterate over each word in the array and capitalize the first letter of each word using the toUpperCase method on the first character, and then concatenating the rest of the word using the slice method starting from the second character. Finally, the method joins the capitalized words back together into a single string with no spaces.

Usage
Here are some examples of using the .camelCase method:

    console.log('hello case'.camelCase());    // Output: "HelloCase"
    console.log('camel case word'.camelCase());    // Output: "CamelCaseWord"
    console.log('the quick brown fox'.camelCase()); // Output: "TheQuickBrownFox"

Conclusion

The .camelCase method is a simple and efficient way to convert strings to camel case format in JavaScript. By capitalizing the first letter of each word and removing all spaces, this method can make your code easier to read and more consistent.


### Merge Two Strings

The following is a simple JavaScript function that merges two strings together when their end and start match exactly. This algorithm ensures that it always uses the longest possible overlap between the two strings.

How It Works

The function mergeStrings takes two string arguments, str1 and str2. It then initializes an empty string overlap to hold the matching characters at the end of str1 and the start of str2.

The function iterates through each character of str1 using a for loop. At each iteration, it checks if str2 starts with the remaining characters of str1. If it does, it sets the overlap variable to the remaining characters in str1 that match the start of str2.

Finally, the function concatenates str1 with the remaining characters of str2 after the overlap length has been subtracted.

Examples
Here are some examples of using the mergeStrings function:


    console.log(mergeStrings('abcde', 'cdefgh')); // Output: "abcdefgh"
    console.log(mergeStrings('abaab', 'aabab')); // Output: "abaabab"
    console.log(mergeStrings('abc', 'def')); // Output: "abcdef"
    console.log(mergeStrings('abc', 'abc')); // Output: "abc"
    console.log(mergeStrings('abaabaab', 'aabaabab')); // Output: "abaabaabab"

Conclusion

The mergeStrings function is a simple and efficient way to merge two strings together when their end and start match exactly. By using the longest possible overlap between the two strings, this algorithm can create a new string that seamlessly combines the two original strings.

