function translatePigLatin(str, charPos = 0) {
    // Check if the first character of the string is a vowel
    if (['a', 'e', 'i', 'o', 'u'].includes(str[0])) {
      // If it's a vowel, append 'way' if it's the first character, otherwise append 'ay'
      return str + (charPos === 0 ? 'way' : 'ay');
    } else {
      // If the first character is a consonant
      if (charPos === str.length) {
        // If the end of the string is reached, append 'ay'
        return str + 'ay';
      } else {
        // If not, recursively call the function with the first character moved to the end
        return translatePigLatin(str.slice(1) + str[0], charPos + 1);
      }
    }
  }
  