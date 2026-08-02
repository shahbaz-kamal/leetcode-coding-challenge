// function characterReplacement(s: string, k: number): number {

//     const occurances = new Array(26).fill(0);
//     let left=0
//     let right=0
//     let ans=0
//     let maxOccurances=0;
//     for(right;right<s.length;right++){

//     }
//     return ans
// };
function characterReplacement(s: string, k: number): number {

    // const occurances = new Array(26).fill(0);
    // let left=0
    let right=0
    // let ans=0
    // let maxOccurances=0;

    const count=new Map<string,number>()
    let result=0;
    let left=0;
   
    for(right;right<s.length ; right++){
      count.set(s[right], (count.get(s[right]) ?? 0) + 1);

      while((right-left+1)-Math.max(...count.values())>k) {
         count.set(s[left], count.get(s[left])! - 1);
            left++;
      }
      result=Math.max(result,right-left+1)
    }
    console.log(result)
    return result
};