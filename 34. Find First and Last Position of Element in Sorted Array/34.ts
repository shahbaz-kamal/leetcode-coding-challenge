function searchRange(nums: number[], target: number): number[] {
    const first=findBound(nums,target,true)
    if(first===-1) return [-1,-1]
    const last=findBound(nums,target,false)
    return [nums[first],nums[last]]
};

const findBound = (nums: number[], target: number, isFirst: boolean): number => {
    let start = 0;
    let end = nums.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] > target) {
            end = mid - 1
        } else if (nums[mid] < target) {
            start = mid + 1
        } else {
            // nums[mid] === target here, only now check boundary condition
            if (isFirst) {
                if (mid === start || nums[mid - 1] !== target) {
                    return mid
                }
                end = mid - 1
            } else {
                if (mid === end || nums[mid + 1] !== target) {
                    return mid
                }
                start = mid + 1
            }
        }
    }
    return -1
}