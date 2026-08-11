function threeSum(nums: number[]): number[][] {
  let results: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let index = 0; index < nums.length && nums[index] <= 0; index++) {
    if (index === 0 || nums[index] !== nums[index - 1]) {
      twoSum2(nums, index, results);
    }
  }

  return results;
}

const twoSum2 = (nums: number[], index: number, results: number[][]) => {
  let left = index + 1;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[index] + nums[left] + nums[right];
    if (sum < 0) left++;
    else if (sum > 0) right--;
    else {
      results.push([nums[index], nums[left], nums[right]]);
      left++;
      right--;
      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }
    }
  }
};


const finalData=threeSum([-1,0,1,2,-1,-4])
console.log(finalData)