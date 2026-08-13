function maxArea(height: number[]): number {
  let results = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const width = right - left;
    const area = width * Math.min(height[left], height[right]);
    if (area >= results) results = area;
    if(height[left]>=height[right]) right--
    else left++
  }
  return results;
}

const data=maxArea([1,8,6,2,5,4,8,3,7])
console.log(data)
