/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

  let n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      let temp = nums[j];
      if (nums[j] > nums[j + 1]) {
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums
};


const result=sortArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
console.log(result)