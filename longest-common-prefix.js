function longestCommonPrefix(strs) {

  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    console.log(`char value is: ${char}`)

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
}

    
   



console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""
