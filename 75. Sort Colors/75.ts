/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let low=0;
    let high=nums.length-1
    let current=0

    while(current<=high){
         if(nums[current]===0){
            swap(nums,current,low)
            low++
            current++
         }
         else if(nums[current]===2){
            swap(nums,current,high)
            high--
         }
         else current++
    }
};

function swap<T>(array: T[], indexA: number, indexB: number): void {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}