function twoSum(numbers: number[], target: number): number[] {
  let results = [];
  let left = 0;
  let right = numbers.length-1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      results.push(left);
      results.push(right);
     break
    }
    if(sum<target) {
        left++
    }
    if(sum>target) right--
  }
  return results
}
const numbers=[2,7,11,15]
const target=9

const finalResult=twoSum(numbers,target)

console.log(finalResult)
