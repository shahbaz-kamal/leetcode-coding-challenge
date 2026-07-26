const matches=(s1Map:number[],s2Map:number[]):boolean=>{
for(let i=0;i<26;i++){
    if(s1Map[i]!==s2Map[i]) return false
}
return true
}


const checkInclusion=(s1:string,s2:string):boolean=>{
    if (s1.length > s2.length) return false
    const s1Map = Array.from({ length: 26 }, () => 0);
    const s2Map=Array.from({length:26},()=>0);


    for (let i=0;i<s1.length;i++){
     s1Map[s1.charCodeAt(i)-'a'.charCodeAt(0)]++
        s2Map[s2.charCodeAt(i)-'a'.charCodeAt(0)]++
    }
    for (let i=0;i<s2.length-s1.length;i++){
   

        if(matches(s1Map,s2Map)){
            return true
        }
        s2Map[s2.charCodeAt(i+s1.length)-'a'.charCodeAt(0)]++
        s2Map[s2.charCodeAt(i)-'a'.charCodeAt(0)]--

    }
    return matches(s1Map,s2Map)
}

const s1="ab"
const s2="eidbaooo"

const result=checkInclusion(s1,s2)

console.log(result)