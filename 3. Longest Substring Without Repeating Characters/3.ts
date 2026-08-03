function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;
  let result = 0;
  let left = 0;
  let right = 0;
  const window = new Set();
  for (right; right < s.length; right++) {
    while (window.has(s[right])) {
      window.delete(s[left]);
      left++;
    }
    window.add(s[right]);
    result=Math.max(result,right-left+1)
  }

  return result;
}
const i1="abcabcbb"
const i2="bbbbb"
const i3="pwwkew"
const result=lengthOfLongestSubstring(i3)

console.log(result)
