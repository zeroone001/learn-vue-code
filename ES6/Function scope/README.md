## Function scope, block scope, constants
In this lesson, we will introduce the let keyword for the purpose of declaring block scoped variables. You will also learn about defining block scoped constants, and the dangers of scoping, such as the temporal dead zone. We will conclude the lesson with best practices.
### Var vs Let
Variables declared with var have function scope. They are accessible inside the function they are defined in.
```javascript
var guessMe = 2;
// A: guessMe is 2
( function() {
    // B: guessMe is undefined
    var guessMe = 5;
    // C: guessMe is 5
} )();
// D: guessMe is 2

```