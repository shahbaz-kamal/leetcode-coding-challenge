// function majorityElement(nums: number[]): number {
//     const numLength = nums.length
//     const numMap = new Map<number, number>()
//     for (let i = 0; i < nums.length; i++) {
//         if (!numMap.has(nums[i])) numMap.set(nums[i], 1)
//         if (numMap.has(nums[i]) && numMap.get(nums[i]) as number > numLength / 2) {
//             return nums[i]
//         }
//         else {
//             numMap.set(nums[i],numMap.get(nums[i]) as number +1)
//         }
//     }
//     return -1
// };

function majorityElement(nums: number[]): number {
    const numLength = nums.length
    const numMap = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
    //   const count=(numMap.get(nums[i] ?? 0)) +1

         const count = (numMap.get(nums[i]) ?? 0) + 1;
         numMap.set(nums[i],count)
         if(count>(numLength/2)) return nums[i]
        
    }
    return -1
};