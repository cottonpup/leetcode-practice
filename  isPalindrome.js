// Problem Resource: https://leetcode.com/problems/palindrome-number

// 1. The Very First Naive Solution

const isPalindromeNaive = function (x) {
    if (x < 0) {
        return false;
    }

    const frontDigits = x.toString().slice(0, Math.round(x.toString().length / 2));
    const backDigits = x.toString().slice(-Math.round(x.toString().length / 2));

    return frontDigits === backDigits.split('').reverse().join('');
};

// By converting the value of x to a string, splitting the resulting string in half,
// reversing the second half, and comparing it to the first half, I was able to solve the problem.
// I also realized I don't really need to split them in half. I could just reverse it right away and return if it is equal.
// While I know that this way may not be the most efficient,
// I am pleased that it provided the desired outcome.

// 2. The Optimized Solution

const isPalindromeOptimized = function (x) {
    let reversed = '';

    for (let char of x) {
        reversed = char + reversed;
    }
    return reversed;
};
