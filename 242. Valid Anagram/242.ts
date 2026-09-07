// function isAnagram(s: string, t: string): boolean {
//     if (s.length !== t.length) return false
//     const stringMap = new Map<string, number>()

//     for (let i = 0; i < s.length; i++) {
//         if (!stringMap.has(s[i])) stringMap.set(s[i], 0)
//         if (!stringMap.has(t[i])) stringMap.set(t[i], 0)
//         if (stringMap.has(s[i])) {
           
//             stringMap.set(s[i], (stringMap.get(s[i]) ?? 0) + 1)
//         }
//         if (stringMap.has(t[i])) stringMap.set(t[i], (stringMap.get(t[i])??0) - 1)
//     }
//     for (const [key, value] of stringMap) {
//         if (value !== 0) return false
//     }
//     console.log(stringMap)
//     return true
// };

const finalOutput = isAnagram("rat", "car")

console.log(finalOutput)

// function isAnagram(s: string, t: string): boolean {
//     if (s.length !== t.length) return false;

//     const counts = new Map<string, number>();

//     for (let i = 0; i < s.length; i++) {
//         counts.set(s[i], (counts.get(s[i]) ?? 0) + 1);
//         counts.set(t[i], (counts.get(t[i]) ?? 0) - 1);
//     }

//     for (const value of counts.values()) {
//         if (value !== 0) return false;
//     }
//     return true;
// }

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const counts = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - aCode]++;
        counts[t.charCodeAt(i) - aCode]--;
    }

    for (let i = 0; i < 26; i++) {
        if (counts[i] !== 0) return false;
    }
    return true;
}