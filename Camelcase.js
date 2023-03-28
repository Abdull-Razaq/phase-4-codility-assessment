String.prototype.camelCase = function() {
    // Split the input string into an array of words
    const words = this.split(' ');
  
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    // Join the capitalized words back together without spaces
    return capitalizedWords.join('');
};