function fullJustify(words: string[], maxWidth: number): string[] {
    let result: string[] = []
    let currentLine: string[] = []
    let currentLineLength = 0
    let index = 0

    while (index < words.length) {
        if (currentLineLength + currentLine.length + words[index].length > maxWidth) {
            let gaps = currentLine.length - 1
            let extraSpaces = maxWidth - currentLineLength
            let line = ''

            if (gaps === 0) {
                // only one word on this line -> pad all space on the right
                line = currentLine[0] + ' '.repeat(extraSpaces)
            } else {
                let spaces = Math.floor(extraSpaces / gaps)
                let remainder = extraSpaces % gaps
                for (let j = 0; j < currentLine.length; j++) {
                    line += currentLine[j]
                    if (j < gaps) {
                        line += ' '.repeat(spaces + (j < remainder ? 1 : 0))
                    }
                }
            }

            result.push(line)   // push ONE complete line string
            currentLine = []
            currentLineLength = 0
        }

        currentLine.push(words[index])
        currentLineLength += words[index].length
        index += 1
    }

    let lastLine = currentLine.join(' ')
    let trailingSpaces = maxWidth - lastLine.length
    lastLine += ' '.repeat(trailingSpaces)
    result.push(lastLine)

    return result
}