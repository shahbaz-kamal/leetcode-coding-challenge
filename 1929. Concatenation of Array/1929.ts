function getConcatenation(nums: number[]): number[] {
    let results=[]
    for (let i=1;i<3;i++){
        for (let j of nums){
            results.push(nums[j])
        }
    }
    return results
};