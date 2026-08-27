function nextPermutation(nums: number[]): void {
    let i=nums.length-2;
    while(i>=0 && nums[i+1]<=nums[i]){
        i--;
    }
    if(i>=0){
        let j=nums.length-1;
        while(nums[j]<=nums[i]){
            j--;
        }
        swap(nums,i,j)
    }
    reverse(nums,i+1)
};

const swap=(nums:number[],i:number,j:number)=>{
    const temp=nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
}

const reverse=(nums:number[],start:number)=>{
let end=nums.length-1;
while(start<end){
    swap(nums,start,end)
    start++
    end--
}
}