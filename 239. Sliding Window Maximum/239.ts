function maxSlidingWindow(nums: number[], k: number): number[] {
    const output: number[] = [];
    const q: number[] = []; // stores indices
    let l = 0, r = 0;

    while (r < nums.length) {
        // pop smaller values from q (from the back)
        while (q.length && nums[q[q.length - 1]] < nums[r]) {
            q.pop();
        }
        q.push(r);

        // remove left val from window if it's out of range
        if (l > q[0]) {
            q.shift();
        }

        if (r + 1 >= k) {
            output.push(nums[q[0]]);
            l++;
        }
        r++;
    }

    return output;
}

const input1=[1,3,-1,-3,5,3,6,7]

const output1=maxSlidingWindow(input1,3)
console.log(output1)