function mergeStrings(str1, str2) {
    // Find the longest possible overlap between the two strings
    let overlapLength = 0;
    for (let i = 1; i <= str1.length && i <= str2.length; i++) {
      if (str1.slice(-i) === str2.slice(0, i)) {
        overlapLength = i;
      }
    }
  
    // Combine the two strings based on the overlap
    return str1 + str2.slice(overlapLength);
  }