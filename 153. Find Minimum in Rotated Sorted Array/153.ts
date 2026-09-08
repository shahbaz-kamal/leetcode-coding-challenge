function findMin(nums: number[]): number {
    let result=nums[0]
    let leftIndex=0;
    let rightIndex=nums.length-1;
    while (leftIndex<=rightIndex){
        if (nums[leftIndex]<nums[rightIndex]){
            result=Math.min(result,nums[leftIndex])
            break
        }

        const mid=Math.floor((leftIndex+rightIndex)/2)
        result = Math.min(result, nums[mid])

        if(nums[mid]>=nums[leftIndex]){
            leftIndex=mid+1
        }
        else rightIndex=mid-1
    }

    return result
};