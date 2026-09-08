function searchMatrix(matrix: number[][], target: number): boolean {
    const numberOfRows = matrix.length;
    const numberOfColumns = matrix[0].length

    let topRowIndex = 0;
    let bottomRowIndex = numberOfRows - 1
    let currentRow = 0;
    while (topRowIndex <= bottomRowIndex) {
        currentRow = Math.floor((topRowIndex + bottomRowIndex) / 2)
        if (target > matrix[currentRow][numberOfColumns - 1]) {
            topRowIndex = currentRow + 1
        }
        else if (target < matrix[currentRow][0]) {
            bottomRowIndex = currentRow - 1
        }
        else break
    }

    if (!(topRowIndex <= bottomRowIndex)) return false

    let leftIndex = 0;
    let rightIndex = numberOfColumns - 1

    while (leftIndex <= rightIndex) {
        const mid = Math.floor((leftIndex + rightIndex) / 2)

        if (target > matrix[currentRow][mid]) {
            leftIndex = mid + 1
        }
        else if (target < matrix[currentRow][mid]) rightIndex = mid - 1
        else return true
    }
return false

};