// Problem Resource: https://leetcode.com/problems/two-sum/

// 1. The Very First Naive Solution

const twoSumNaive = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (i !== j) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    }
};

/**
 * The implementation containing nested loops is rather slow, as it has a time complexity of O(n^2).
 * Therefore, I need to enhance my code to optimize its time complexity.
 * Additionally, I realized that using two `if` statements is unnecessary.
 * By assigning the value of `j` to `j = i + 1` directly, I can avoid the need to handle undefined values and identical indices.
 */

// 2. The Optimized Solution

// nums = [3,2,4], target = 6
const twoSumOptimized = function (nums, target) {
    let numObj = {};
    // {2} {3: 0}
    // {3} {3: 0, 2: 1}
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        // {1} // 6 - 3 = 3
        // {2} // 6 - 2 = 4
        // {3} // 6 - 4 = 2
        if (numObj[complement] !== undefined) {
            return [numObj[complement], i];
            // [1, 2]
        }
        numObj[nums[i]] = i;
        // {1} // numsObj[nums[0]] = 0
        // {2} // numsObj[nums[1]] = 1
    }
};

/**
 * I obtained the optimized solution by consulting someone's blog,
 * but the code was not straightforward to comprehend and challenging to implement.
 * Hence, I am considering studying methods for efficiently retrieving values using keys with objects,
 * as it seems like a highly effective technique.
 */
