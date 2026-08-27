function fizzBuzz(n: number): string[] {
    let result = []

    for (let i = 1; i <= n; i++) {
        const divisibleByThree = i % 3 === 0
        const divisibleByFive = i % 5 === 0
        if (divisibleByThree && divisibleByFive) {
            result.push("FizzBuzz")
            continue
        }
        if (divisibleByThree) {
            result.push("Fizz")
            continue
        }
        if (divisibleByFive) {
            result.push("Buzz")
            continue
        }
     result.push(i.toString())
    }
    return result
};