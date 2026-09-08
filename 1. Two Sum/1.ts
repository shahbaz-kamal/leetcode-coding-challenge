function twoSum(nums: number[], target: number): number[] {
    const numMap=new Map<number,number>()

    for (let i=0;i<nums.length;i++){
        const required=target -nums[i]
        if(numMap.has(required)) return [i,numMap.get(required) as number]
        numMap.set(nums[i],i)
    }
    return []
};

