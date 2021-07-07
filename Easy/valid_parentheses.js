/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

var isValid = function (s) {
  const isPair = (symbol1, symbol2) => {
    if (symbol1 === "{" && symbol2 === '}') {
      return true;
    } else if (symbol1 === "(" && symbol2 === ")") {
      return true;
    } else if (symbol1 === "[" && symbol2 === "]") {
      return true;
    } else {
      return false;
    }
  };

  let stack = [];

  const isOpen = (symbol) => {
    if (symbol === "{" || symbol === "[" || symbol === "(") {
      return true;
    } else {
      return false;
    }
  };

  for (let i = 0; i < s.length; i++) {
    if (isOpen(s[i])){
      stack.push(s[i]);
    } else if (isPair(stack.slice(-1)[0], s[i])) {
      stack.pop();
    } else {
      return false
    }
  }

  return true;
};

console.log(isValid("{([])}"));