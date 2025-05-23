/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    switch (char) {
      case "(":
      case "[":
      case "{":
        stack.push(char);
        break;

      case ")":
        if (stack.pop() !== "(") return false;
        break;

      case "]":
        if (stack.pop() !== "[") return false;
        break;

      case "}":
        if (stack.pop() !== "{") return false;
        break;
    }
  }

  return stack.length === 0;
  }



console.log(isValid("]"));
console.log(isValid("[]]"));
console.log(isValid("[[]]"));
