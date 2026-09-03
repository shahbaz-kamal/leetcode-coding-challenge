function countSubstrings(s: string): number {
    let result=0;
    for(let i=0;i<s.length;i++){
        result+=checkPallindrome(s,i,i)
        result+=checkPallindrome(s,i,i+1)
    }
    return result
};

const checkPallindrome=(s:string,left:number,right:number):number=>{
    let count=0;
    while(left>0 && right<s.length && s[left]===s[right]){
        left--
        right++
        count++
    }
    return count
}