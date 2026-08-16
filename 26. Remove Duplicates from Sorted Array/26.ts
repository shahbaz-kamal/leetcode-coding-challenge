function removeDuplicates(nums: number[]): number {
    let left=1;
    for(let right=1;right<nums.length;right++){
        if(nums[right]!==nums[right-1]) left++
    }
    return left
};

const output=removeDuplicates([0,0,1,1,1,2,2,3,3,4])
console.log(output)