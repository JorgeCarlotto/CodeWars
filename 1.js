function countPositivesSumNegatives(input) {
    const answer = []
    let positiveSum = 0
    let negativeSum = 0

    if(input && input.length) {
      for(let i = 0; i < input.length; i++) {
        if(input[i] > 0) {
            positiveSum += 1
        } else {
            negativeSum += input[i]
        }
      }
      answer.push(positiveSum)
      answer.push(negativeSum)
    }
    return answer
}

console.log(countPositivesSumNegatives([0, 2, 0, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))



// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }